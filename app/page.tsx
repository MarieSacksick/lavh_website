import styles from './page.module.css';
import Image from 'next/image';
import BandeauLogos from './components/BandeauLogos/BandeauLogos';
import Programme from './components/Programme/Programme';
import Link from 'next/link';
import { comediens } from './data/comediens';
import ComedienPhoto from './components/ComedienPhoto/ComedienPhoto';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Littérature à voix haute - Bessin 2024</h1>
      <div className={styles.content}>
        <div>
          <Image
            className={styles.imgPortrait}
            src="jean_moulin.png"
            alt="Portrait de Jean Moulin"
            width={1000}
            height={1000}
          />
          <p className={styles.imageCaption}>
            &ldquo;Jean Moulin&rdquo;, une peinture de{' '}
            <Link
              href={'https://gillessacksick.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site de Gilles Sacksick"
            >
              Gilles Sacksick
            </Link>
          </p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.comedienPhotos}>
            {comediens.map(comedien => (
              <ComedienPhoto key={comedien.nom} {...comedien} />
            ))}
          </div>
          <h2
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
            }}
          >
            <span>Littérature à Voix Haute présente</span>
            <span>Du 17 au 24 août 2024</span>
          </h2>
          <Programme />

          <div className={styles.tarifEtGayLee}>
            {/* Informations sur les tarifs */}
            <div>
              <p>
                Prix des places : <span>13 €</span>
              </p>
              <p>
                PASS : <span>75 € - CB</span> acceptée
              </p>
              <p>
                Tarif jeune public : <span>3 €</span>
              </p>
            </div>
            <p className={styles.artistInfo}>Gay Lee Tischbirek, flûte - Alice Heimstaedt, danse</p>
          </div>
          <BandeauLogos />
        </div>
      </div>
    </div>
  );
}
