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
          className={styles.logo}
        />
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.navUl}>
          <li>Soirées Littéraires du Bessin</li>
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
