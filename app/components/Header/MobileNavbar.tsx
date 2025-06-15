'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileNavbar.module.css';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import NavLinks from './NavLinks';

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navMobile}>
        <button
          className={`${styles.burgerButton} ${styles.icon}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
        <Link href="/">
          <Image
            src="/logos/logo_LAVH.jpg"
            alt="Littérature à Voix Haute"
            width={100}
            height={100}
            className={styles.logoMobile}
          />
        </Link>
      </nav>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <NavLinks
            linkClassName={styles.mobileLink}
            activeLinkClassName={styles.activeMobileLink}
          />
        </ul>
      </div>
    </>
  );
}
