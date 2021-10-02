import { PossibleActionsToPerform } from '../../types';


export default function DownloadLink(
  {
    action,
    onClick,
    result,
  }:
  {
    action: PossibleActionsToPerform;
    onClick: () => void;
    result: Blob;
  },
): JSX.Element {
  return (
    <a
      className="no-underline bg-green dim bn br4 white pv2 ph3 b"
      href={URL.createObjectURL(result)}
      download
      onClick={onClick}
    >
      Download&nbsp;
      {action === PossibleActionsToPerform.HIDE
        ? 'image'
        : 'files'}
    </a>
  );
}
