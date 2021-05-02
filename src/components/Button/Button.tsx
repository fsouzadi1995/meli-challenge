import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: 'primary' | 'secondary';
  text: string;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ colorScheme, text, onClick, disabled, ...props }: Props) => {
  return (
    <button
      className={`${styles.btn} ${
        disabled ? styles['btn-disabled'] : styles[`btn-${colorScheme}`]
      }`}
      {...props}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
