import styles from './ActorProfile.module.css';
import Polaroid from '../Polaroid/Polaroid';

type ActorProfileProps = {
  name: string;
  imagePath: string;
  description?: string;
  id?: string;
};

export default function ActorProfile({ name, imagePath, description, id }: ActorProfileProps) {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageContainer}>
        <Polaroid src={imagePath} alt={`Photo de ${name}`} name={name} />
      </div>
      <div className={styles.textContainer}>
        <h2>{name}</h2>
        <p className={styles.description}>{description || 'Description à venir'}</p>
      </div>
    </div>
  );
}
