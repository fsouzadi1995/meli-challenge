import logo from '../../assets/meli.png';

import styles from './Logo.module.css';

export const Logo = (): JSX.Element => {
  return <img alt='Mercado Libre Logo' className={styles.logo} src={logo} />;
};
