import ListedFilesAndFileInput from 'components/listed-files-and-file-input';
import ErrorMessage from 'components/error-message';
import PasswordInputs from 'components/password-inputs';
import SubmitButtonOrDownloadLink from 'components/submit-button-or-download-link';
import { PossibleActionsToPerform } from 'types';
import useFormState from '../../hooks/use-form-state';


export default function FormToFindFiles(): JSX.Element {
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

    removeErrorMessageForFileInput,

    imageErrorMessage,

    result: resultingZipFile,
  } = useFormState({
    typeOfForm: PossibleActionsToPerform.RETRIEVE,
    worker: new Worker(
      new URL(
        '../../workers/Retrieve.worker.js',
        import.meta.url,
      ),
    ),
  });


  return (
    <form
      className="f4"
    >
      <ListedFilesAndFileInput
        action={PossibleActionsToPerform.RETRIEVE}
        type="image"
        accept="image/*"
        files={image}
        removeErrorMessageForFileInput={removeErrorMessageForFileInput}
        setFiles={setImage}
      />
      {typeof imageErrorMessage === 'string' && (
        <ErrorMessage
          errorMessage={imageErrorMessage}
        />
      )}


      <PasswordInputs
        action={PossibleActionsToPerform.RETRIEVE}
        password={password}
        confirmedPassword={confirmedPassword}
        handlePasswordChange={handlePasswordChange}
        handleConfirmedPasswordChange={handleConfirmedPasswordChange}
      />


      <SubmitButtonOrDownloadLink
        action={PossibleActionsToPerform.RETRIEVE}
        result={resultingZipFile}
        onSubmitButtonClick={() => onSubmitButtonClick()}
        onDownloadLinkClick={onDownloadLinkClick}
        inProgress={inProgress}
        progress={progress}
      />
    </form>
  );
}
