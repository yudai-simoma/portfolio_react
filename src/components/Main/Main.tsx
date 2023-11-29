import React from 'react';
import styles from './Main.module.css';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <section>
        <h2>Welcome!</h2>
        <p>This is the main content of the website.</p>
      </section>
      <section>
        <h2>About</h2>
        <p>More information about the website.</p>
      </section>
    </main>
  );
};

export default Main;
