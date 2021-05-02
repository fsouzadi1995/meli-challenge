import MeliLogo from '../../assets/meli.png';

import styles from './Logo.module.scss';

const Logo = (): JSX.Element => {
  return <img alt='MercadoLibre' className={styles.img} src={MeliLogo} />;
};

export default Logo;
