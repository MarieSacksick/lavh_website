import styles from './ActorsPictures.module.css';

import ComedienPhoto from '../ComedienPhoto/ComedienPhoto';
import { actors } from '@/app/data/actors';

export default function ActorsPictures() {
  return (
    <div className={styles.container}>
      {actors.map(actor => (
        <div key={actor.nom} className={styles.imgContainer}>
          <ComedienPhoto {...actor} />
        </div>
      ))}
    </div>
  );
}
