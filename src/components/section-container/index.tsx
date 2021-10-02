export default function SectionContainer(
  {
    children,
  }:
  {
    children: JSX.Element[];
  },
): JSX.Element {
  /* The first `<div>` that appears below has the background
  colors that alternate for every `SectionContainer` that is a
  child of the main container in the home page (at `src/pages/index.tsx`).

  To see exactly which background colors are applied,
  see the global CSS stylesheet in the `src/styles` folder.
  */
  return (
    <div>
      <div
        className="mw7 center w-100 pt4 pb5 ph3"
      >
        {children}
      </div>
    </div>
  );
}
