import { PossibleActionsToPerform } from 'types';
import RadioField from 'components/radio-field';


export default function ActionForm(
  {
    actionToPerform,
    handleChangeOfActionToPerform,
  }:
  {
    actionToPerform: PossibleActionsToPerform | null;
    handleChangeOfActionToPerform: (action: PossibleActionsToPerform) => void;
  },
): JSX.Element {
  return (
    <form
      className="f4"
    >
      <fieldset
        className="bn"
      >

        <legend
          className="w-50-m w-50-l fw7"
        >
          What would you like to do?
        </legend>


        <RadioField
          actionToPerform={actionToPerform}
          actionThisFieldRepresents={PossibleActionsToPerform.HIDE}
          handleChangeOfActionToPerform={handleChangeOfActionToPerform}
        />


        <RadioField
          actionToPerform={actionToPerform}
          actionThisFieldRepresents={PossibleActionsToPerform.RETRIEVE}
          handleChangeOfActionToPerform={handleChangeOfActionToPerform}
        />


      </fieldset>
    </form>
  );
}
