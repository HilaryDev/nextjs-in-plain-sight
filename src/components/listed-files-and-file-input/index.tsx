import { useRef, useState } from 'react';

import FileInput from 'components/file-input';
import ListedFile from 'components/listed-file';
import { PossibleActionsToPerform, FileSubmitted } from 'types';
import addFileToFilesArrayIfNotPresent from '../../utils/add-file-to-files-array-if-not-present';


export default function ListedFilesAndFileInput(
  {
    action,
    accept,
    files,
    enteringMultipleFiles = false,
    removeErrorMessageForFileInput,
    setFiles,
    type = 'file',
  }:
  {
    action: PossibleActionsToPerform;
    accept?: string;
    files: FileSubmitted[];
    enteringMultipleFiles?: boolean;
    removeErrorMessageForFileInput: (typeOfFileInput: 'file' | 'image') => void;
    setFiles: (newFiles: FileSubmitted[]) => void;
    type?: 'file' | 'image';
  },
): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [hasThereBeenAnError, setHasThereBeenAnError] = useState(false);
  const fileInputRef = useRef<null | HTMLInputElement>(null);


  const readFile = (file: FileSubmitted) => new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        contents: reader.result,
        name: file.name,
        date: new Date(file.lastModified),
        size: file.size,
        type: file.type,
      });
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file as any);
  });


  const loadFiles = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    setLoading(true);

    removeErrorMessageForFileInput(type);


    try {
      const newFiles = await Promise.all(
        [
          ...(event.target.files as any),
        ].map(readFile),
      );
      setHasThereBeenAnError(false);

      setFiles(
        [
          ...files,
          ...newFiles,
        ]
          // Reduce the array to only contain unique files (removing duplicates).
          .reduce(addFileToFilesArrayIfNotPresent, []),
      );
    } catch {
      setHasThereBeenAnError(true);
    }

    setLoading(false);
  };


  const getClickHandlerOfListedFile = (listedFileIndex: number) =>
    (): void =>
      setFiles(
        files.filter((_, existingFileIndex) =>
          existingFileIndex !== listedFileIndex),
      );


  return (
    <div>
      {type === 'image'
        ? (
          <p
            className="pt0 mt0 b"
          >
            Image you want to&nbsp;
            {action === PossibleActionsToPerform.HIDE
              ? 'hide the files inside of'
              : 'retrieve files from'}
            :
          </p>
        )
        : (
          <p
            className="mt5 b"
          >
            Files you would like to hide:
          </p>
        )}


      {files.length > 0 && (
        <ul
          className="pl4-m pl4-l mb3 circle-list"
        >
          {files.map((file, index) => (
            <li
              key={Number(index)}
            >
              <ListedFile
                fileName={file.name}
                fileSize={file.size}
                handleClick={getClickHandlerOfListedFile(index)}
              />
            </li>
          ))}
        </ul>
      )}


      {(enteringMultipleFiles || files.length === 0) && (
        <FileInput
          accept={accept}
          fileInputRef={fileInputRef}
          isLoading={isLoading}
          hasThereBeenAnError={hasThereBeenAnError}
          handleChange={loadFiles}
          enteringMultipleFiles={enteringMultipleFiles}
          type={type}
        />
      )}
    </div>
  );
}
