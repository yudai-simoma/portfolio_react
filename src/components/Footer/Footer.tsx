import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 My Website</p>
    </footer>
  );
};

export default Footer;
