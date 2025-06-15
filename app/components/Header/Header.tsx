'use client';
import styles from './Header.module.css';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Header() {
  return (
    <header className={styles.header}>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
