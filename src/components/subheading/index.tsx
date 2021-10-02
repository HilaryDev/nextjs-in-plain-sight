export default function Subheading(
  {
    children,
  }:
  {
    children: JSX.Element | string | (JSX.Element | string)[];
  },
): JSX.Element {
  return (
    <h2
      className="f1 lh-title mt0 pt5"
    >
      {children}
    </h2>
  );
}
