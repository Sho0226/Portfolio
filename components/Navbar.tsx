import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>cineca</div>
      <div className={styles.navLinks}>
        <Link href="/">news</Link>
        <Link href="/about">about</Link>
        <Link href="/skills">works</Link>
        <Link href="/projects">stockist</Link>
        <Link href="/achievements">shop</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
