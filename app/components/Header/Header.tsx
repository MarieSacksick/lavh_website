'use client';
import styles from './Header.module.css';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <header className={styles.header}>
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
