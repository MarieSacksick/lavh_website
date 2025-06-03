import { Comedien } from '@/app/types/comediens';
import styles from './ComedienDialog.module.css';
import Image from 'next/image';

/**
 * Propriétés du composant ComedienDialog
 * @interface ComedienDialogProps
 * @property {Comedien} comedien - Les informations du comédien à afficher
 * @property {function} onClose - Fonction appelée pour fermer le dialog
 */
type ComedienDialogProps = {
  comedien: Comedien;
  onClose: () => void;
};

/**
 * Dialog modal affichant les détails d'un comédien
 *
 * @component
 * @description
 * Le dialog peut être fermé en :
 * - Cliquant sur le bouton de fermeture
 * - Cliquant en dehors du dialog
 *
 * @param {ComedienDialogProps} props - Les propriétés du composant
 * @param {Comedien} props.comedien - Les informations du comédien
 * @param {function} props.onClose - Fonction de fermeture du dialog
 *
 * @example
 * ```tsx
 * <ComedienDialog
 *   comedien={selectedComedien}
 *   onClose={() => setSelectedComedien(null)}
 * />
 * ```
 *
 * @returns {JSX.Element} Le dialog modal avec les informations du comédien
 */
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
