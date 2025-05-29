import styles from './ActorProfile.module.css';
import ComedienPhoto, { ComedienPhotosProps } from '../ComedienPhoto/ComedienPhoto';

export type ActorProfileProps = ComedienPhotosProps & {
  id: string;
  description: string;
};

export default function ActorProfile({ description, nom, imageSrc, prenom }: ActorProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <ComedienPhoto imageSrc={imageSrc} nom={nom} prenom={prenom} />
      </div>
      <div className={styles.textContainer}>
        <h2>{nom}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
