import {FileSubmitted} from 'types';


/** If the provided `file` _isn't_ present in the provided `filesArray`,
 * it appends the `file` to the array and returns the array.
 *
 * If the provided `file` _is_ already present in the `filesArray`,
 * it returns the array as-is.
 */
export default function addFileToFilesArrayIfNotPresent(
  filesArray: FileSubmitted[],
  file: FileSubmitted
): FileSubmitted[] {
  const isFileInFilesArray = Boolean(
    filesArray.find((existingFile) =>
      existingFile.name === file.name
        && existingFile.size === file.size
        && existingFile.type === file.type
        && existingFile.lastModified === file.lastModified
    )
  );

  return isFileInFilesArray
    ? filesArray
    : [...filesArray, file];
};
