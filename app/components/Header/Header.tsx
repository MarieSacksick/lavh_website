'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerBar} ${styles.headerBarUp}`} />

      <nav className={styles.nav}>
        <button
          className={`${styles.burgerButton} ${styles.icon}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
        <Image
          src="/logo.jpg"
          alt="Littérature à Voix Haute"
          width={100}
          height={100}
          className={styles.logoMobile}
        />
        <div className={styles.navGroup}>
          <Link href="/">Soirées Littéraires du Bessin</Link>
          <Image
            src="/logo.jpg"
            alt="Littérature à Voix Haute"
            width={100}
            height={100}
            className={styles.logo}
          />
          <Link href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}>
            Extraits Audio
          </Link>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <span>Soirées Littéraires du Bessin</span>
          </li>
          <li>
            <Link href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}>
              Extraits Audio
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.headerBar} ${styles.headerBarDown}`} />
    </header>
  );
}
