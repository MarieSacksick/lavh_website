import { FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';
import { IoMail } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Pied de page du site avec informations de contact et liens légaux
 *
 * @component
 * @returns {JSX.Element} Le pied de page complet avec toutes les informations de contact
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.content}>
          <div className={styles.iconsAndTitleContainer}>
            <h2>Contactez-nous</h2>
            <div className={styles.iconsContainer}>
              <a
                href="https://www.facebook.com/litteratureavoixhaute/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FaFacebook className={styles.icon} />
                <span className={styles.iconText}>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@lavh8723"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FaYoutube className={styles.icon} />
                <span className={styles.iconText}>YouTube</span>
              </a>
              <a href="mailto:contact@litteratureavoixhaute.com" className={styles.iconLink}>
                <IoMail className={styles.icon} />
                <span className={styles.iconText}>contact@litteratureavoixhaute.com</span>
              </a>
              <a href="tel:0231228381" className={styles.iconLink}>
                <BsTelephoneFill className={styles.icon} />
                <span className={styles.iconText}>02 31 22 83 81</span>
              </a>
            </div>
          </div>

          <Link href={'/'}>
            <Image
              src={'tete_du_logo.png'}
              alt=""
              width={100}
              height={100}
              className={styles.headImage}
            />
          </Link>
        </div>
        <div className={styles.copyright}>
          <p>
            © {currentYear} Littérature à Voix Haute. Tous droits réservés.
          </p>
          <Link href="/cgu" className={styles.legalLink}>
            Conditions Générales d&apos;Utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
}
