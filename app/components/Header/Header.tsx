'use client';
import styles from './Header.module.css';
import DesktopNavbar from './DesktopNavbar';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <header className={styles.header}>
      <DesktopNavbar />
      <MobileHeader />
    </header>
  );
}
