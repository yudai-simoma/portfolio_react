import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Services</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
