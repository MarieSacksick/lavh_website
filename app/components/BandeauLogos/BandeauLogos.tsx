import { partenaires } from '@/app/data/partenaires';
import styles from './BandeauLogos.module.css';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Bandeau affichant les logos des partenaires
 *
 * @component
 * @description
 * Ce composant affiche une bande horizontale contenant :
 * - Les logos de tous les partenaires
 * - Chaque logo est cliquable et redirige vers le site du partenaire
 * - Les liens s'ouvrent dans un nouvel onglet
 * filtré par l'année en cours
 *
 * Les logos sont redimensionnés automatiquement pour s'adapter à la largeur disponible
 *
 * @example
 * ```tsx
 * <BandeauLogos />
 * ```
 *
 * @returns {JSX.Element} Le bandeau de logos des partenaires
 */
export default function BandeauLogos({ year }: { year: number }) {
  const filteredPartenaires = partenaires.filter(partenaire =>
    partenaire.years_present.includes(year)
  );

  return (
    <div className={styles.container}>
      {filteredPartenaires.map(partenaire => (
        <Link
          key={partenaire.name}
          href={partenaire.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoWrapper}
        >
          <Image
            src={partenaire.logo}
            alt={`Logo ${partenaire.name}`}
            width={1000}
            height={1000}
            className={styles.logoImg}
          />
        </Link>
      ))}
    </div>
  );
}
