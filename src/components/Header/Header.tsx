import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/about">About</Link></li>
          <li className={styles.navItem}><Link to="/services">Services</Link></li>
          <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
