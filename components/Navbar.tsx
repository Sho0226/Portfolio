import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>My Portfolio</div>
      <div className={styles.navLinks}>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/works">Works</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
