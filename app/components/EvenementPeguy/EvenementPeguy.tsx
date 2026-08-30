import styles from './EvenementPeguy.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { comediens } from '@/app/data/comediens';
import { Comedien } from '@/app/types/comediens';

const YEAR = 2026;

/**
 * Propriétés du composant EvenementPeguy
 * @interface EvenementPeguyProps
 * @property {function} onComedienClick - Fonction appelée lorsque le nom de la lectrice est cliqué
 */
type EvenementPeguyProps = {
  onComedienClick: (comedien: Comedien) => void;
};

/**
 * Composant affichant l'annonce de la lecture exceptionnelle
 * "Charles Péguy, Le Mystère de la charité de Jeanne d'Arc" à la Cathédrale de Bayeux.
 *
 * @component
 * @description
 * Reprend la mise en page de l'affiche officielle de l'événement : le portrait de
 * Charles Péguy à droite, les informations pratiques à gauche, et le bandeau des
 * partenaires en bas de page.
 *
 * @param {EvenementPeguyProps} props - Les propriétés du composant
 * @param {function} props.onComedienClick - Fonction appelée lorsque le nom de la lectrice est cliqué
 *
 * @returns {JSX.Element} L'annonce de l'événement
 */
export default function EvenementPeguy({ onComedienClick }: EvenementPeguyProps) {
  const handleComedienClick = (name: string) => {
    const comedien = comediens.find(
      c => `${c.prenom} ${c.nom}`.toLowerCase() === name.toLowerCase()
    );
    if (comedien) {
      onComedienClick(comedien);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <p className={styles.eyebrow}>Littérature à Voix Haute présente</p>

        <h1 className={styles.title}>Charles Péguy</h1>
        <p className={styles.subtitle}>
          Le Mystère de la charité de Jeanne d'Arc
        </p>

        <h2 className={styles.location}>Cathédrale de Bayeux</h2>
        <p className={styles.date}>samedi 12 septembre 2026 à 20h</p>

        <div className={styles.reading}>
          <p className={styles.readingBy}>lecture de</p>
          <a
            className={styles.readerName}
            onClick={() => handleComedienClick('Catherine Salviat')}
          >
            Catherine Salviat
          </a>
          <p className={styles.readerTitle}>
            sociétaire honoraire de la Comédie-Française
          </p>
        </div>

        <p className={styles.fees}>une participation aux frais sera demandée à chacun</p>

        <p className={styles.musician}>Gay Lee Tischbirek, flûte</p>

        <div className={styles.logos}>
          <Link
            href="https://www.litteratureavoixhaute.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoWrapper}
          >
            <Image
              src="/logos/logo_LAVH.jpg"
              alt="Logo Littérature à Voix Haute"
              width={200}
              height={200}
              className={styles.logoImg}
            />
          </Link>
          <Link
            href="https://www.bellenormandy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoWrapper}
          >
            <Image
              src="/logos/Belle-Normandie.png"
              alt="Logo Belle Normandy"
              width={200}
              height={200}
              className={styles.logoImg}
            />
          </Link>
          <Link
            href="https://www.calvados.fr/accueil.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoWrapper}
          >
            <Image
              src="/logos/conseil_général_calvados.jpeg"
              alt="Logo Conseil Général du Calvados"
              width={200}
              height={200}
              className={styles.logoImg}
            />
          </Link>
          <Link
            href="https://seulles-terre-mer.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoWrapper}
          >
            <Image
              src="/logos/Logo_Seulles_terre et mer copie.jpg"
              alt="Logo Communauté de Communes Seulles Terre et Mer"
              width={200}
              height={200}
              className={styles.logoImg}
            />
          </Link>
        </div>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src="/peguy_2026.jpg"
          alt="Charles Péguy, portrait par Gilles Sacksick"
          width={700}
          height={900}
          className={styles.portrait}
          priority
        />
        <p className={styles.imageCaption}>Charles Péguy par Gilles Sacksick</p>
      </div>
    </div>
  );
}
