import JSZip from 'jszip';

export default async function encryptZip(zipUint, imageUint, password) {
  const passwordUint = new TextEncoder().encode(password);
  const baseKey = await crypto.subtle.importKey(
    'raw',
    passwordUint,
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey'],
  );
  const cryptoKey = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: imageUint.slice(0, 16),
      iterations: 10000,
      hash: 'SHA-256',
    },
    baseKey,
    {
      name: 'AES-CTR',
      length: 128,
    },
    false,
    ['encrypt'],
  );
  const zipEncrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-CTR',
      counter: new Uint8Array(16),
      length: 128,
    },
    cryptoKey,
    zipUint.buffer,
  );
  return new Uint8Array(zipEncrypted);
}

onmessage = async function ({
  data: {
    image: [{ imageContents, type }],
    files,
    compression,
    password,
  },
}) {
  /** Zip that will contain the files to compress. */
  const zip = new JSZip();


  // Add each file to the zip.
  files.forEach((file) => {
    const { name, fileContents, date } = file;
    zip.file(name, fileContents, {
      date,
    });
  });


  const imageUint = new Uint8Array(imageContents);

  const zipUint = await zip.generateAsync(
    {
      type: 'uint8array',
      compression: compression === 0 ? 'STORE' : 'DEFLATE',
      compressionOptions: {
        level: compression,
      },
    },
    ({ percent }) => {
      postMessage({ progress: percent });
    },
  );

  const zipEncryptedUint = await encryptZip(zipUint, imageUint, password);
  const resultUint = new Uint8Array([...imageUint, ...zipEncryptedUint]);

  postMessage({
    result: new Blob([resultUint], { type }),
  });

  close();
};
