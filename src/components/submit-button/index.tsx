import { PossibleActionsToPerform } from 'types';


export default function SubmitButton(
  {
    action,
    onClick,
    inProgress,
    progress,
  }:
  {
    action: PossibleActionsToPerform;
    onClick: () => void;
    inProgress: boolean;
    progress: number;
  },
): JSX.Element {
  let buttonText: string;

  if (action === PossibleActionsToPerform.HIDE) {
    buttonText = inProgress
      ? 'Hiding'
      : 'Hide';
  } else {
    buttonText = inProgress
      ? 'Retrieving'
      : 'Retrieve';
  }

  buttonText += inProgress
    ? ` files...${
      inProgress
        ? ` (${progress}%)`
        : ''
    }`
    : ' files';


  return (
    <button
      className={`
        bn br4 white pv2 ph3 b

        ${inProgress
        ? 'bg-mid-gray normal-cursor'
        : 'bg-purple dim'
        }
      `}
      onClick={onClick}
      disabled={inProgress}
      type="button"
    >

      {buttonText}

    </button>
  );
}
