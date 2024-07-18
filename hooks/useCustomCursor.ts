import { useEffect, useRef } from 'react';
import commonStyles from '../src/styles/commonStyle.module.css';

const useCustomCursor = () => {
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
        cursorRef.current.classList.add(commonStyles.white);
      }
    };

    const handleMouseLeaveNavbar = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(commonStyles.white);
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

  return { cursorRef, navbarRef };
};

export default useCustomCursor;
