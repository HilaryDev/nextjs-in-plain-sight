import styles from './index.module.css';


export default function GradientText(
  {
    children,
    gradient,
  }:
  {
    children: string;
    gradient: string;
  },
): JSX.Element {
  return (
    <span
      className={styles.text}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient})`,
      }}
    >
      {children}
    </span>
  );
}
