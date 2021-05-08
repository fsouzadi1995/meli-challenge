import styles from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: 'primary' | 'secondary';
}

export const Button = ({ text, color, ...props }: Props): JSX.Element => {
  return (
    <button className={`${styles.btn} ${styles[`btn-${color}`]}`} {...props}>
      {text}
    </button>
  );
};
