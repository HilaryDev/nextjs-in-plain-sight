import dynamic from 'next/dynamic';
import SectionContainer from 'components/section-container';
import Subheading from 'components/subheading';
import GradientText from 'components/gradient-text';
import FormFallback from 'components/form-fallback';
import { PossibleActionsToPerform } from 'types';

const FormToHideFiles = dynamic(
  () => import('components/form-to-hide-files'),
  { loading: () => (<FormFallback />) }
);
const FormToFindFiles = dynamic(
  () => import('components/form-to-find-files'),
  { loading: () => (<FormFallback />) }
);


export default function FilesForm(
  {
    actionToPerform,
  }:
  {
    actionToPerform: PossibleActionsToPerform;
  }
): JSX.Element {
  return (
    <SectionContainer>
      <Subheading>
        Let&apos;s&nbsp;

        <GradientText
          gradient="#09f, hsl(200, 100%, 59%)"
        >
          {actionToPerform === PossibleActionsToPerform.HIDE
            ? 'hide'
            : 'retrieve'}
        </GradientText>

        &nbsp;files!
      </Subheading>


      {actionToPerform === PossibleActionsToPerform.HIDE
        ? <FormToHideFiles />
        : <FormToFindFiles />}
    </SectionContainer>
  )
}
