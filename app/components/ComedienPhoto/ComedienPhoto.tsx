import Image from 'next/image';

import styles from './ComedienPhoto.module.css';
import { ComedienPhotosProps } from '@/app/types/comediens';

/**
 * Composant affichant la photo et le nom d'un comédien
 *
 * @component
 * @param {ComedienPhotosProps & { onClick?: () => void }} props - Les propriétés du composant
 * @param {string} props.nom - Le nom du comédien
 * @param {string} props.prenom - Le prénom du comédien
 * @param {string} props.imageSrc - L'URL de la photo du comédien
 * @param {function} [props.onClick] - Fonction optionnelle appelée au clic sur la carte
 *
 * @example
 * ```tsx
 * <ComedienPhoto
 *   nom="Dupont"
 *   prenom="Jean"
 *   imageSrc="/photos/jean-dupont.jpg"
 *   onClick={() => handleComedienClick(comedien)}
 * />
 * ```
 *
 * @returns {JSX.Element} La carte du comédien avec sa photo et son nom
 */
const ComedienPhoto = ({
  nom,
  prenom,
  imageSrc,
  onClick,
}: ComedienPhotosProps & { onClick?: () => void }) => {
  return (
    <a className={styles.container} onClick={onClick}>
      <Image
        width={100}
        height={100}
        src={imageSrc}
        alt={`Photo de ${prenom} ${nom}`}
        className={styles.comedienPhoto}
      />
      <div style={{ marginTop: 'auto' }}>
        <p>{prenom}</p>
        <p>{nom}</p>
      </div>
    </a>
  );
};

export default ComedienPhoto;
