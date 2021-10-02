import type { MutableRefObject } from 'react';


export default function FileInput(
  {
    accept,
    fileInputRef,
    handleChange,
    isLoading,
    hasThereBeenAnError,
    enteringMultipleFiles,
    type,
  }:
  {
    accept: string | undefined;
    fileInputRef: MutableRefObject<HTMLInputElement | null>;
    isLoading: boolean;
    hasThereBeenAnError: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    enteringMultipleFiles: boolean;
    type: 'image' | 'file';
  },
): JSX.Element {
  /** When the "Add files" button is clicked, this function triggers the invisible
   * `<input type="file">` element's default behavior (ie. open a file explorer
   * so the user can choose which files to submit).
   */
  const handleButtonClick = (): void => {
    if (
      fileInputRef.current?.click
      && typeof fileInputRef.current.click === 'function'
    ) {
      fileInputRef.current.click();
    }
  };


  const inputId = type === 'image'
    ? 'image'
    : enteringMultipleFiles
      ? 'multiple_files'
      : 'file';


  return (
    <div>
      <label
        className="flex flex-column items-start"
        htmlFor={inputId}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleChange}
          multiple={enteringMultipleFiles}
          hidden
          ref={fileInputRef}
          name={inputId}
        />


        <button
          className="bn br4 white pv2 ph3 b bg-purple dim"
          type="button"
          onClick={handleButtonClick}
        >

          {hasThereBeenAnError
            ? 'Error loading '
            : isLoading
              ? 'Loading '
              : 'Add '}
          {type}
          {enteringMultipleFiles && 's'}
          {isLoading && '...'}

        </button>
      </label>
    </div>
  );
}
