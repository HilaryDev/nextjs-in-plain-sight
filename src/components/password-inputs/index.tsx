import PasswordInputContainer from 'components/password-input-container';
import { PossibleActionsToPerform } from 'types';


export default function PasswordInputs(
  {
    action,
    password,
    confirmedPassword,
    handlePasswordChange,
    handleConfirmedPasswordChange,
  }:
  {
    action: PossibleActionsToPerform;
    password: string;
    confirmedPassword: string;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleConfirmedPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
): JSX.Element {
  return (
    <>
      <PasswordInputContainer
        htmlFor="password"
      >
        <span
          className="b"
        >
          Password&nbsp;
          {action === PossibleActionsToPerform.RETRIEVE
            ? 'that was used to hide the files'
            : ''}
          &nbsp;(optional):
        </span>


        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={`
            pv2 ph2
            mt2 mb4
            bn br3
            w-50-m w-50-l
          `}
          name="password"
          id="password"
        />


        {action === PossibleActionsToPerform.RETRIEVE
          ? (
            <>
              Note that if a password is needed to retrieve the files,
              and you provide the wrong password or you don&apos;t provide
              a password at all, the files won&apos;t be successfully retrieved
              from the image.
            </>
          )
          : ''}
      </PasswordInputContainer>


      {password.trim().length > 0 && (
        <>
          <PasswordInputContainer
            htmlFor="confirmed_password"
          >
            <span
              className="b"
            >
              Confirm password:
            </span>

            <input
              type="password"
              value={confirmedPassword}
              onChange={handleConfirmedPasswordChange}
              className={`
                bn mt2 br3 pv2 ph2
                w-50-m w-50-l
              `}
              name="confirmed_password"
              id="confirmed_password"
            />
          </PasswordInputContainer>


          {confirmedPassword.trim().length > 0
            && password !== confirmedPassword
            && (
              <p
                className="pb2"
              >
                <strong
                  className="light-red"
                >
                  The passwords don&apos;t match.
                </strong>
              </p>
            )}
        </>
      )}


    </>
  );
}
