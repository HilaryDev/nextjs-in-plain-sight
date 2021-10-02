export default function ErrorMessage(
  {
    errorMessage,
  }:
  {
    errorMessage: string;
  },
): JSX.Element {
  return (
    <p
      className="mt0 pt0 mb5 light-red"
    >
      <strong>
        {errorMessage}
      </strong>
    </p>
  );
}
