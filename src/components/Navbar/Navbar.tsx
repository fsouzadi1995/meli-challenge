import Logo from '../Logo/Logo';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Logo />
        <ul>
          <li>Ayuda</li>
        </ul>
      </div>
    </nav>
  );
};
