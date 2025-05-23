import Image from 'next/image';
import styles from './Polaroid.module.css';

type PolaroidProps = {
  src: string;
  alt: string;
  name: string;

  onClick?: () => void;
  className?: string;
};

export default function Polaroid({ src, alt, name, onClick, className }: PolaroidProps) {
  return (
    <div
      className={`${styles.polaroidContainer} ${className || ''} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image src={src} alt={alt} width={200} height={200} className={styles.actorImage} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
