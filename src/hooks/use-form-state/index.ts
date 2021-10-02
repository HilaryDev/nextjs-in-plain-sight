import { useState } from "react";

import {PossibleActionsToPerform, FileSubmitted} from 'types';
import {MAX_COMPRESSION} from '../../constants';


type UseFormStateReturnType = {
  password: string;
  confirmedPassword: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmedPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progress: number;
  inProgress: boolean;
  result: undefined | Blob;
  image: FileSubmitted[];
  setImage: (newImage: FileSubmitted[]) => void;
  removeErrorMessageForFileInput: (typeOfFileInput: 'file' | 'image') => void;
  onSubmitButtonClick: (
    {
      files,
      compression,
    }?:
    {
      files: FileSubmitted[];
      compression: number;
    }
  ) => void;
  onDownloadLinkClick: () => void;
  imageErrorMessage: string | null;
  filesErrorMessage: string | null;
};


export default function useFormState(
  {
    typeOfForm,
    worker,
  }:
  {
    typeOfForm: PossibleActionsToPerform;
    worker: Worker;
  }
): UseFormStateReturnType {
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);


  const [confirmedPassword, setConfirmedPassword] = useState("");
  const handleConfirmedPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmedPassword(e.target.value);


  const [image, setImage] = useState<FileSubmitted[]>([]);

  const [imageErrorMessage, setImageErrorMessage] = useState<string | null>(null);
  const [filesErrorMessage, setFilesErrorMessage] = useState<string | null>(null);


  const [progress, setProgress] = useState(0);


  const [inProgress, setInProgress] = useState(false);


  const [result, setResult] = useState<UseFormStateReturnType['result']>(undefined);


  const workerMessageListener = (
    {
      data: {
        progress,

        /* We alias the `result` in the message with a leading underscore
        so the variable name does not conflict with the `result` variable
        above declared with `useState`.
        */
        result: _result
      }
    }:
    {
      data: {
        progress: number,
        result: UseFormStateReturnType['result']
      }
    }
  ) => {
    setProgress(progress);
    setResult(_result);
  };


  const onDownloadLinkClick = (): void => {
    setInProgress(false);
    setResult(undefined);
  }

  const onSubmitButtonClick = (
    params: Parameters<UseFormStateReturnType['onSubmitButtonClick']>[0]
  ): void => {
    const isImageFieldValid = image.length > 0;

    const files = params?.files || [];
    const compression = params?.compression || MAX_COMPRESSION;


    /* If the user wants to _retrieve_ files from an image
    (ie. `typeOfForm === PossibleActionsToPerform.RETRIEVE`),
    we don't need the files field to be filled.

      Otherwise if the user wants to _hide_ files in an image
    (ie. `typeOfForm === PossibleActionsToPerform.HIDE`),
    the user must provide at least one file.
    */
    const isFilesFieldValid = typeOfForm === PossibleActionsToPerform.RETRIEVE
      || files.length > 0;


    if (isImageFieldValid && isFilesFieldValid) {
      setInProgress(true);


      setImageErrorMessage(null);
      setFilesErrorMessage(null);


      worker.onmessage = workerMessageListener;


      worker.postMessage({
        image,
        password,

        ...(
          (typeOfForm === PossibleActionsToPerform.HIDE
            && typeof files !== 'undefined'
            && typeof compression !== 'undefined'
          )
          ? {
            /* If the form is for hiding files inside of an image,
            we need to know which _files_ we're going to hide inside the image,
            and the zip's _compression_ level.
            */
            files,
            compression,
          }
          : {}
        )
      });
      return;
    }


    if (!isImageFieldValid) {
      setImageErrorMessage('You must provide an image.');
    }
    if (!isFilesFieldValid) {
      setFilesErrorMessage('You must provide at least one file.')
    }
  }


  const removeErrorMessageForFileInput: UseFormStateReturnType[
    'removeErrorMessageForFileInput'
  ] = (typeOfFileInput) => typeOfFileInput === 'image'
    ? setImageErrorMessage(null)
    : setFilesErrorMessage(null);


  return ({
    password,
    confirmedPassword,
    handlePasswordChange,
    handleConfirmedPasswordChange,

    progress,

    inProgress,

    result,

    image,
    setImage,

    onSubmitButtonClick,

    onDownloadLinkClick,

    imageErrorMessage,
    filesErrorMessage,

    removeErrorMessageForFileInput,
  })
}
