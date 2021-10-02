export default function Footer(): JSX.Element {
  /* Instead of hardcoding the year "2022" (current year at time of writing)
  into the copyright notice below, `new Date()` is used instead so the
  currently ongoing year is always shown.

  That way I don't have to remember to update the year in the copyright notice in the future.
  */
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer
      className={`
        pt2 ph2 pb4 pb3-m pb3-l
        bg-black white
        tc b f5
      `}
    >
      <p>
        &copy;&nbsp;
        {currentYear}
        &nbsp;

        <a
          className="dim hot-pink"
          href="https://github.com/MaxPerdomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Max Perdomo
        </a>
      </p>
    </footer>
  );
}
