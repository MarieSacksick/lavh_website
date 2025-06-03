import { Comedien } from '@/app/types/comediens';
import styles from './ComedienDialog.module.css';
import Image from 'next/image';

type ComedienDialogProps = {
  comedien: Comedien;
  onClose: () => void;
};

export default function ComedienDialog({ comedien, onClose }: ComedienDialogProps) {
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
              src={comedien.imageSrc}
              alt={`Photo de ${comedien.prenom} ${comedien.nom}`}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{`${comedien.prenom} ${comedien.nom}`}</h2>
            <p className={styles.description}>{comedien.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
