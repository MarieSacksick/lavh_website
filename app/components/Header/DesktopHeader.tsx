'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DesktopHeader.module.css';
import Image from 'next/image';

export default function DesktopHeader() {
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
    <nav className={`${styles.navDesktop} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.containerHeader}>
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Littérature à Voix Haute"
            width={100}
            height={100}
            className={styles.logo}
          />
        </Link>
        <div className={styles.containerTitleAndNav}>
          <div className={`${styles.headerBar} ${styles.headerBarUp}`} />
          <div className={styles.headImageContainer}>
            <Image
              src={'head_from_logo.png'}
              alt=""
              width={100}
              height={150}
              className={styles.headImage}
            />
          </div>
          <div className={styles.navGroup}>
            <Link href="/">Soirées Littéraires du Bessin</Link>
            <Link href="/comediens">Comédiens</Link>
            <Link href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}>
              Extraits Audio
            </Link>
          </div>
          <div className={`${styles.headerBar} ${styles.headerBarDown}`} />

          <Image
            src={'divider_ornament.png'}
            alt=""
            width={100}
            height={100}
            className={styles.dividerOrnament}
          />
        </div>
        <div className={styles.rightElement}></div>
      </div>
    </nav>
  );
}
