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
      {/* Desktop */}
      <nav className={styles.navDesktop}>
        <div className={`${styles.headerBar} ${styles.headerBarDown}`} />
        <div className={styles.containerHeader}>
          <Image
            src="/logo.jpg"
            alt="Littérature à Voix Haute"
            width={100}
            height={100}
            className={styles.logo}
          />
          <div className={styles.containerTitleAndNav}>
            <h1>Littérature à voix haute</h1>
            <div className={styles.navGroup}>
              <Link href="/">Soirées Littéraires du Bessin</Link>
              <Link href="/comediens">Comédiens</Link>
              <Link href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}>
                Extraits Audio
              </Link>
            </div>
          </div>
          <div className={styles.rightElement}>2010</div>
        </div>
        <div className={`${styles.headerBar} ${styles.headerBarDown}`} />
        <div className={`${styles.headerBar} ${styles.headerBarDown}`} />
      </nav>
      {/* Mobile Nav */}
      <nav className={styles.navMobile}>
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
      </nav>
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <Link href="/">Soirées Littéraires du Bessin</Link>
          </li>
          <li>
            <Link href="/comediens">Comédiens</Link>
          </li>
          <li>
            <Link href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}>
              Extraits Audio
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
