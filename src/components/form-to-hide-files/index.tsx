import { useState } from 'react';

import CompressionRangeInput from 'components/compression-range-input';
import ErrorMessage from 'components/error-message';
import ListedFilesAndFileInput from 'components/listed-files-and-file-input';
import { MAX_COMPRESSION } from '../../constants';
import PasswordInputs from 'components/password-inputs';
import { PossibleActionsToPerform, FileSubmitted } from 'types';
import SubmitButtonOrDownloadLink from 'components/submit-button-or-download-link';
import useFormState from '../../hooks/use-form-state';


export default function FormToHideFiles(): JSX.Element {
  const {
    password,
    confirmedPassword,
    handlePasswordChange,
    handleConfirmedPasswordChange,

    progress,

    inProgress,

    image,
    setImage,

    onSubmitButtonClick,
    onDownloadLinkClick,

    imageErrorMessage,
    filesErrorMessage,

    removeErrorMessageForFileInput,

    result: resultingImage,
  } = useFormState({
    typeOfForm: PossibleActionsToPerform.HIDE,
    worker: new Worker(
      new URL(
        '../../workers/Hide.worker.js',
        import.meta.url,
      ),
    ),
  });


  const [files, setFiles] = useState<FileSubmitted[]>([]);


  const [compression, setCompression] = useState(MAX_COMPRESSION);
  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCompression(Number(e.target.value));


  return (
    <form
      className="f4"
    >
      <ListedFilesAndFileInput
        action={PossibleActionsToPerform.HIDE}
        files={image}
        setFiles={setImage}
        removeErrorMessageForFileInput={removeErrorMessageForFileInput}
        type="image"
        accept="image/*"
      />
      {typeof imageErrorMessage === 'string' && (
        <ErrorMessage
          errorMessage={imageErrorMessage}
        />
      )}


      <ListedFilesAndFileInput
        action={PossibleActionsToPerform.HIDE}
        files={files}
        setFiles={setFiles}
        removeErrorMessageForFileInput={removeErrorMessageForFileInput}
        enteringMultipleFiles
      />
      {typeof filesErrorMessage === 'string' && (
        <ErrorMessage
          errorMessage={filesErrorMessage}
        />
      )}


      <CompressionRangeInput
        compression={compression}
        handleCompressionChange={handleCompressionChange}
      />


      <PasswordInputs
        action={PossibleActionsToPerform.HIDE}
        password={password}
        confirmedPassword={confirmedPassword}
        handlePasswordChange={handlePasswordChange}
        handleConfirmedPasswordChange={handleConfirmedPasswordChange}
      />


      <SubmitButtonOrDownloadLink
        action={PossibleActionsToPerform.HIDE}
        result={resultingImage}
        onSubmitButtonClick={() => onSubmitButtonClick({ files, compression })}
        onDownloadLinkClick={onDownloadLinkClick}
        inProgress={inProgress}
        progress={progress}
      />
    </form>
  );
}
