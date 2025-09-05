import Image from 'next/image';

import styles from './ComedienPhoto.module.css';
import { Comedien } from '@/app/types/comediens';

type ComedienPhotoProps = Comedien & {
  onClick?: () => void;
  year?: number;
};

/**
 * Composant affichant la photo et le nom d'un comédien
 *
 * @component
 * @param {ComedienPhotoProps} props - Les propriétés du composant
 * @returns {JSX.Element} La carte du comédien avec sa photo et son nom
 */
function ComedienPhoto({
  nom,
  prenom,
  imageSrc,
  onClick,
  year,
}: ComedienPhotoProps) {
  const src = year && imageSrc[year] ? imageSrc[year] : imageSrc.default;
  return (
    <a className={styles.container} onClick={onClick}>
      <Image
        width={100}
        height={100}
        src={src}
        alt={`Photo de ${prenom} ${nom}`}
        className={styles.comedienPhoto}
      />
      <div style={{ marginTop: 'auto' }}>
        <p>{prenom}</p>
        <p>{nom}</p>
      </div>
    </a>
  );
}

export default ComedienPhoto;
