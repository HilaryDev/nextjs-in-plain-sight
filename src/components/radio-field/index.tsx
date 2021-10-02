import styles from './index.module.css';
import { PossibleActionsToPerform } from 'types';


export default function RadioField(
  {
    actionToPerform,
    actionThisFieldRepresents,
    handleChangeOfActionToPerform,
  }:
  {
    actionToPerform: PossibleActionsToPerform | null;
    actionThisFieldRepresents: PossibleActionsToPerform;
    handleChangeOfActionToPerform: (action: PossibleActionsToPerform) => void;
  },
): JSX.Element {
  /** Indicates whether this radio button is currently selected.
   */
  const isSelected = actionToPerform === actionThisFieldRepresents;


  /** Consequence of clicking this button. */
  const consequence = `${(
    actionThisFieldRepresents === PossibleActionsToPerform.HIDE
      ? 'Hide files inside'
      : 'Retrieve files from'
  )} an image`;


  const ariaLabel = `Click this button to ${
    consequence[0].toLowerCase()
  }${consequence.slice(1)}`


  const handleRadioButtonClick = (): void =>
    handleChangeOfActionToPerform(actionThisFieldRepresents);


  return (
    <p
      className="mb4"
    >
      <label
        className={`
          flex items-center
          pl3-m pl3-l pv1
          br4

          ${isSelected
          ? 'bg-dark-blue'
          : ''}
        `}
        htmlFor={actionThisFieldRepresents}
      >
        <span
          className="order-2 ml3 db"
        >
          {consequence}
        </span>


        <input
          type="radio"
          name={actionThisFieldRepresents}
          value={actionThisFieldRepresents}
          hidden
          className="dn"
        />


        <button
          onClick={handleRadioButtonClick}
          className={`
            br-100 ba b--light-gray pa1
            ${styles.circleSize}
          `}
          type="button"
          aria-label={ariaLabel}
          title={ariaLabel}
        >
          <span
            className={`
              db h-100 w-100 br-100

              ${isSelected
              ? 'bg-blue'
              : 'bg-transparent'}
            `}
          />
        </button>
      </label>
    </p>
  );
}
