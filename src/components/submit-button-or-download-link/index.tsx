import dynamic from 'next/dynamic';

import DownloadLinkFallback from 'components/download-link-fallback';
import SubmitButton from 'components/submit-button';
import { PossibleActionsToPerform } from 'types';

/* Since the `DownloadLink` doesn't need to be loaded right away
(since it will take the user some time to choose from their file explorer
the image to hide/retrieve files from
_and_ optionally files to hide inside the image),
we load the `DownloadLink` component dynamically to decrease perceived load time.
*/
const DownloadLink = dynamic(
  () => import('components/download-link'),
  { loading: () => (<DownloadLinkFallback />)}
);


export default function SubmitButtonOrDownloadLink(
  {
    action,
    onDownloadLinkClick,
    onSubmitButtonClick,
    inProgress,
    progress,
    result,
  }:
  {
    action: PossibleActionsToPerform;
    onDownloadLinkClick: () => void;
    onSubmitButtonClick: () => void;
    inProgress: boolean;
    progress: number;
    result: Blob | undefined;
  },
): JSX.Element {
  return (
    <div
      className="mt4"
    >


      {result
        ? (
          <DownloadLink
            action={action}
            onClick={onDownloadLinkClick}
            result={result}
          />
        )
        : (
          <SubmitButton
            action={action}
            onClick={onSubmitButtonClick}
            inProgress={inProgress}
            progress={progress}
          />
        )}


    </div>
  );
}

