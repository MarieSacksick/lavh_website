import Image from 'next/image';

import styles from './ComedienPhoto.module.css';
import { ComedienPhotosProps } from '@/app/types/comediens';

const ComedienPhoto = ({ nom, prenom, imageSrc }: ComedienPhotosProps) => {
  return (
    <div className={styles.container}>
      <Image
        width={100}
        height={100}
        src={imageSrc}
        alt={`Photo de ${prenom} ${nom}`}
        className={styles.comedienPhoto}
      />
      <div>
        <p>{prenom}</p>
        <p>{nom}</p>
      </div>
    </div>
  );
};

export default ComedienPhoto;
