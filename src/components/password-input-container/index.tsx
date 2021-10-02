export default function PasswordInputContainer(
  {
    htmlFor,
    children,
  }:
  {
    htmlFor: string;
    children: (JSX.Element | string)[];
  },
): JSX.Element {
  return (
    <p
      className="mt5"
    >
      <label
        className="flex flex-column"
        htmlFor={htmlFor}
      >

        {children}

      </label>
    </p>
  );
}
