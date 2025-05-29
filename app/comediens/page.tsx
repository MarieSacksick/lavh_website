import styles from './page.module.css';
import ActorProfile from '../components/ActorProfile/ActorProfile';
import { actors } from '../data/actors';

export default function Comediens() {
  return (
    <div className={styles.container}>
      <h1>Les comédiens</h1>
      <div className={styles.actorsContainer}>
        {actors.map(actor => (
          <ActorProfile key={actor.nom} {...actor} />
        ))}
      </div>
    </div>
  );
}
