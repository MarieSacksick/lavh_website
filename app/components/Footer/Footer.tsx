import { FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';
import { IoMail } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <h2>Contactez-nous</h2>
      <div className={styles.content}>
        <div className={styles.iconsContainer}>
          <a
            href="https://www.facebook.com/litteratureavoixhaute/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/@lavh8723"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaYoutube className={styles.icon} />
          </a>
          <a href="mailto:contact@litteratureavoixhaute.com" className={styles.iconLink}>
            <IoMail className={styles.icon} />
          </a>
          <a href="tel:0231228381" className={styles.iconLink}>
            <BsTelephoneFill className={styles.icon} />
          </a>
        </div>
        <Image
          src={'head_from_logo.png'}
          alt=""
          width={100}
          height={100}
          className={styles.headImage}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {currentYear} Littérature à Voix Haute. Tous droits réservés.
        </p>
        <Link href="/cgu" className={styles.legalLink}>
          Conditions Générales d&apos;Utilisation
        </Link>
      </div>
    </footer>
  );
}
