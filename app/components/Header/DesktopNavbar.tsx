'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DesktopNavbar.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import DropDownMenu from '../DropdownMenu.tsx/DropDownMenu';

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 88);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headImageContainer}>
        <Link href="/" className={styles.headImageLink}>
          <Image
            src={'head_from_logo.png'}
            alt=""
            width={100}
            height={150}
            className={styles.headImage}
          />
        </Link>
      </div>
      <div className={styles.navGroup}>
        <Link href="/" className={pathname === '/' ? styles.activeLink : ''}>
          Accueil
        </Link>
        <DropDownMenu
          triggerTitle="Soirées Littéraires du Bessin"
          contents={[
            { title: 'Session 2024', href: '/' },
            {
              title: 'Ailleurs',
              href: 'https://www.litteratureavoixhaute.com/ailleurs_2021.html',
            },
          ]}
        />
        <Link href="/comediens" className={pathname === '/comediens' ? styles.activeLink : ''}>
          Comédiens
        </Link>
        <Link
          href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}
          className={pathname === '/Bessin_audio.html' ? styles.activeLink : ''}
        >
          Extraits Audio
        </Link>
      </div>
    </nav>
  );
}
