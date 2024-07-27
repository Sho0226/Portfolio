import Link from 'next/link';
import { forwardRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">Portfolio</Link>
    </div>
    <div className={styles.navLinks}>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/works">Works</Link>
      <Link href="/achieve">Achievements</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
));

Navbar.displayName = 'Navbar';

export default Navbar;
