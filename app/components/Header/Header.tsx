'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Image
            src="/logo.png"
            alt="Littérature à Voix Haute"
            width={50}
            height={50}
            className={styles.logo}
          />
          <div className={styles.navItem}>
            <span>Soirées Littéraires du Bessin</span>
            <div className={styles.dropdown}>
              <Link href="/session-2024" className={styles.dropdownItem}>
                Session 2024
              </Link>
              <Link href="/ailleurs" className={styles.dropdownItem}>
                Ailleurs
              </Link>
            </div>
          </div>
        </div>
        <Link href="/extraits-audio" className={styles.audioLink}>
          Extraits Audio
        </Link>
        <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Fermer le menu">
          ×
        </button>
        <div
          className={`${styles.navItem} ${activeDropdown === 'bessin' ? styles.active : ''}`}
          onClick={() => toggleDropdown('bessin')}
        >
          <span>Soirées Littéraires du Bessin</span>
          <div className={styles.dropdown}>
            <Link href={''} className={styles.dropdownItem}>
              Session 2024
            </Link>
            <Link href="/ailleurs" className={styles.dropdownItem}>
              Ailleurs
            </Link>
          </div>
        </div>
        <Link
          href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}
          className={styles.audioLink}
        >
          Extraits Audio
        </Link>
      </div>
    </header>
  );
}
