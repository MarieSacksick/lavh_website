import Image from 'next/image';
import styles from './Polaroid.module.css';

type PolaroidProps = {
  src: string;
  alt: string;
  name: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
};

export default function Polaroid({
  src,
  alt,
  name,
  width = 300,
  height = 300,
  onClick,
  className,
}: PolaroidProps) {
  return (
    <div
      className={`${styles.polaroidContainer} ${className || ''} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image src={src} alt={alt} width={width} height={height} className={styles.actorImage} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
