import {FileSubmitted} from 'types';
import addFileToFilesArrayIfNotPresent from '.';


describe('addFileToFilesArrayIfNotPresent', () => {
  test('if the file provided is in the files array provided, it returns the array as-is', () => {
    const file: FileSubmitted = {
      name: 'foo',
      type: 'bar',
      size: 123,
      lastModified: 321,
      lastModifiedDate: new Date(),
    }
    const filesArray: FileSubmitted[] = [...new Array(10)]
      .map((_, index) => {
        if (index === 5) {
          // Put the file in the middle of the array.
          return file;
        }

        // Return a dummy file.
        return ({
          name: `baz${index}`,
          type: `elf${index}`,
          size: index,
          lastModified: (index + 1) * 8,
          lastModifiedDate: new Date(),
        })
      });


    const result = addFileToFilesArrayIfNotPresent(filesArray, file);


    expect(result).toStrictEqual(filesArray);
  })


  test('if the file provided is _not_ in the files array provided,'
    + ' it appends the file to the array and returns the array', () => {
    const file: FileSubmitted = {
      name: 'foo',
      type: 'bar',
      size: 123,
      lastModified: 321,
      lastModifiedDate: new Date(),
    }
    const filesArray: FileSubmitted[] = [...new Array(10)]
      .map(
        (_, index) => ({
          name: `baz${index}`,
          type: `elf${index}`,
          size: index,
          lastModified: (index + 1) * 8,
          lastModifiedDate: new Date(),
        })
      );


    const result = addFileToFilesArrayIfNotPresent(filesArray, file);


    expect(result).toStrictEqual(
      filesArray.concat(file)
    );
  })
})
