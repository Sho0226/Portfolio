import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Home</div>
        <p>Welcome to my portfolio website.</p>
      </div>
    </>
  );
};

export default Home;
