import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.illustrationContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>Welcome to my portfolio</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
