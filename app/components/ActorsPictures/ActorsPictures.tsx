import styles from './ActorsPictures.module.css';

import Image, { ImageProps } from 'next/image';

import Link from 'next/link';
type ActorPictureProps = Pick<ImageProps, 'alt' | 'src'>;
const actors = [
  { name: 'Thomas Sacksick', image: '/actors/Sacksick_Thomas.jpg' },
  { name: 'Mélodie Richard', image: '/actors/Richard_melodie_24.jpg' },
  { name: 'Marion Rochmann', image: '/actors/Marion_Rochmann_20230827 copie.jpg' },
  { name: 'André Marcon', image: '/actors/Marcon_Andre_24.jpg' },
  { name: 'Guillaume Lévèque', image: '/actors/Lévèque_Guillaume_24.jpg' },
  { name: 'Evelyne Istria', image: '/actors/Istria_Evelyne_24.jpg' },
  { name: 'Louis Albertosi', image: '/actors/Albertosi_Louis.jpg' },
];

function ActorPicture({ alt, src }: ActorPictureProps) {
  return (
    <Link href={`/comediens`} className={styles.polaroidContainer}>
      <Image src={src} alt={alt} width={300} height={300} className={styles.actorImage} />
      <div className={styles.name}>{alt}</div>
    </Link>
  );
}

export default function ActorsPictures() {
  return (
    <div className={styles.container}>
      {actors.map(actor => (
        <ActorPicture key={actor.name} alt={actor.name} src={actor.image} />
      ))}
    </div>
  );
}
