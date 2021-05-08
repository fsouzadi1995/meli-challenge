import { Logo } from '../Logo/Logo';

import styles from './Header.module.css';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />

        <nav>
          <ul>
            <li>Ayuda</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
