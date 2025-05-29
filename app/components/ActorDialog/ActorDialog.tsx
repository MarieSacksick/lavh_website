import { ActorProfileProps } from '../ActorProfile/ActorProfile';
import styles from './ActorDialog.module.css';
import Image from 'next/image';

type ActorDialogProps = {
  actor: ActorProfileProps;
  onClose: () => void;
};

export default function ActorDialog({ actor, onClose }: ActorDialogProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <div className={styles.dialogHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={actor.imageSrc}
              alt={`Photo de ${actor.prenom} ${actor.nom}`}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{`${actor.prenom} ${actor.nom}`}</h2>
            <p className={styles.description}>{actor.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
