import styles from './Card.module.css';

interface Props {
  children?: React.ReactNode;
}

export const Card = ({ children }: Props): JSX.Element => {
  return <section className={styles.section}>{children}</section>;
};
