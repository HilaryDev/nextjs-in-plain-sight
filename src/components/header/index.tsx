import styles from './index.module.css';


export default function Header(): JSX.Element {
  return (
    <header
      className="bg-near-black white bb b--dark-gray fixed top-0 left-0 right-0"
    >
      <div
        className="mw7 w-100 center flex justify-between flex-wrap ph2"
      >
        <p
          className="white no-underline fw9 i"
        >
          InPlainSight
        </p>


        <p>
          <a
            className={`
              white dim no-underline ph3 pv1 br4 b
              ${styles.button}
            `}
            href="https://github.com/HilaryDev/nextjs-in-plain-sight"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </a>
        </p>
      </div>
    </header>
  );
}
