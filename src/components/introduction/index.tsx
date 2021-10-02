import ActionForm from 'components/action-form';
import GradientText from 'components/gradient-text';
import SectionContainer from 'components/section-container';
import Subheading from 'components/subheading';
import { PossibleActionsToPerform } from 'types';


export default function Introduction(
  {
    actionToPerform,
    handleChangeOfActionToPerform,
  }:
  {
    actionToPerform: PossibleActionsToPerform | null;
    handleChangeOfActionToPerform: (action: PossibleActionsToPerform) => void;
  }
): JSX.Element {
  return (
    <>
      <SectionContainer>
        <h1
          className="mt0 pt5 i fw9 f1 title-m title-l"
        >
          InPlainSight
        </h1>


        <p
          className="w-70-m w-50-l f4 mb5"
        >
          Have you ever wished there was some way to hide secret files
          &quot;in plain sight&quot; but couldn&apos;t find an easy way to do so?

          <span
            className="db pt3"
          >
            Look no further -&nbsp;

            <span
              className="i"
            >
              you have just found the solution!
            </span>
          </span>
        </p>


        <Subheading>
          Hide your files&nbsp;

          <GradientText
            gradient="#f08,#d0e"
          >
            in plain sight
          </GradientText>
        </Subheading>


        <p
          className="w-70-m w-50-l f4"
        >
          Hide all those secret files you don&apos;t want others to know about in a seemingly
          innocent photo.
        </p>

        <p
          className="w-70-m w-50-l f4"
        >
          Now you can borrow others your computer without hearing them criticize the extremely
          excessive amount of memes you have stored.
        </p>
      </SectionContainer>


      <SectionContainer>
        <Subheading>
          Retrieve files&nbsp;

          <GradientText
            gradient="#91f,#70f"
          >
            hidden inside images
          </GradientText>
        </Subheading>

        <p
          className="w-70-m w-50-l f4"
        >
          Your friends can text you images with hidden files in them, and you can retrieve
          those files with&nbsp;
          <span
            className="fw9 i"
          >
            InPlainSight.
          </span>
        </p>
        <p
          className="w-70-m w-50-l f4"
        >
          That way your friendly cat photo exchanges over texts will be the perfect
          coverup for what you&apos;re truly exchanging with each other
          -&nbsp;
          <span
            className="i"
          >
            super duper extraordinarily secret files.
          </span>
        </p>
      </SectionContainer>


      <SectionContainer>
        <Subheading>
          Get started
        </Subheading>


        <ActionForm
          actionToPerform={actionToPerform}
          handleChangeOfActionToPerform={handleChangeOfActionToPerform}
        />
      </SectionContainer>
    </>
  )
}
