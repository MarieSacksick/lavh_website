'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DesktopNavbar.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

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
    <nav className={`${styles.container} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
      <Link href="/" className={pathname === '/' ? styles.activeLink : ''}>
        Accueil
      </Link>
      <DropDownMenu
        triggerTitle="Soirées Littéraires du Bessin"
        contents={[
          { title: 'Session 2024', href: '/' },
          { title: 'Session 2023', href: '/' },
          { title: 'Session 2022', href: '/' },
          { title: 'Session 2021', href: '/' },
          { title: 'Session 2020', href: '/' },
          { title: 'Session 2019', href: '/' },
        ]}
      />
      <Link href="/">
        <Image
          src={'head_from_logo.png'}
          alt=""
          width={100}
          height={150}
          className={styles.headImage}
        />
      </Link>
      <Link href="/comediens" className={pathname === '/comediens' ? styles.activeLink : ''}>
        Comédiens
      </Link>
      <Link
        href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}
        className={pathname === '/Bessin_audio.html' ? styles.activeLink : ''}
      >
        Extraits Audio
      </Link>
    </nav>
  );
}
