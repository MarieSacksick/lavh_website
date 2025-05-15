import styles from './ActorsPictures.module.css';
import Image, { ImageProps } from 'next/image';

type ActorPictureProps = Pick<ImageProps, 'alt' | 'src'>;

function ActorPicture({ alt, src }: ActorPictureProps) {
  return (
    <div className={styles.polaroidContainer}>
      <Image src={src} alt={alt} width={300} height={300} className={styles.actorImage} />
      <div className={styles.name}>Thomas Sacksick</div>
    </div>
  );
}

export default function ActorsPictures() {
  return (
    <div className={styles.container}>
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
      <ActorPicture alt="Thomas Sacksick" src={'/actors/Sacksick_Thomas.jpg'} />
    </div>
  );
}
