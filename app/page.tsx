import styles from './page.module.css';
import Image from 'next/image';
import ActorsPictures from './components/ActorsPictures/ActorsPictures';
import BandeauLogos from './components/BandeauLogos/BandeauLogos';
import Programme from './components/Programme/Programme';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Littérature à voix haute - Bessin 2024</h1>
      <div className={styles.content}>
        <div className={styles.portraitContainer}>
          <Image
            className={styles.imgPortrait}
            src="jean_moulin.png"
            alt="Portrait de Jean Moulin"
            width={1000}
            height={1000}
          />
          <p className={styles.imageCaption}>
            &ldquo;Jean Moulin&rdquo;, une peinture de Gilles Sacksick
          </p>
          <p className={styles.artistInfo}>Gay Lee Tischbirek, flûte - Alice Heimstaedt, danse</p>
        </div>
        <div className={styles.rightContent}>
          <ActorsPictures />
          <h2>
            <span>Littérature à Voix Haute présente</span>
            <span>Du 17 au 24 août 2024</span>
          </h2>
          <Programme />
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

          <BandeauLogos />
        </div>
      </div>
    </div>
  );
}
