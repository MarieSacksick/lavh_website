'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DesktopNavbar.module.css';
import Image from 'next/image';
import NavLinks from './NavLinks';

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 88);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? styles.scrolled : styles.notScrolled}`}>
      <div className={styles.container}>
        <NavLinks linkClassName={styles.link} activeLinkClassName={styles.activeLink} />
        <Link href="/" className={styles.linkImage}>
          <Image
            src={'/tete_du_logo.png'}
            alt=""
            width={100}
            height={150}
            className={styles.headImage}
          />
        </Link>
      </div>
    </nav>
  );
}
