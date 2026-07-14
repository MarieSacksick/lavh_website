'use client';
import { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);

    const handleResize = () => {
      document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
