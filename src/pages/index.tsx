import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const Home: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseEnterNavbar = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.white);
      }
    };

    const handleMouseLeaveNavbar = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.white);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const navbar = navbarRef.current;
    if (navbar) {
      navbar.addEventListener('mouseenter', handleMouseEnterNavbar);
      navbar.addEventListener('mouseleave', handleMouseLeaveNavbar);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (navbar) {
        navbar.removeEventListener('mouseenter', handleMouseEnterNavbar);
        navbar.removeEventListener('mouseleave', handleMouseLeaveNavbar);
      }
    };
  }, []);

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={styles.container}>
        <div className={styles.illustrationContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>Welcome to my portfolio</div>
          </div>
        </div>
      </div>
      <div ref={cursorRef} className={styles.cursor} />
    </>
  );
};

export default Home;
