import styles from './page.module.css';
import ActorProfile from '../components/ActorProfile/ActorProfile';

const actors = [
  {
    name: 'Thomas Sacksick',
    imagePath: '/actors/Sacksick_Thomas.jpg',
  },
  {
    name: 'Mélodie Richard',
    imagePath: '/actors/Richard_melodie_24.jpg',
  },
  {
    name: 'Marion Rochmann',
    imagePath: '/actors/Marion_Rochmann_20230827 copie.jpg',
  },
  {
    name: 'André Marcon',
    imagePath: '/actors/Marcon_Andre_24.jpg',
  },
  {
    name: 'Guillaume Lévèque',
    imagePath: '/actors/Lévèque_Guillaume_24.jpg',
  },
  {
    name: 'Evelyne Istria',
    imagePath: '/actors/Istria_Evelyne_24.jpg',
  },
  {
    name: 'Louis Albertosi',
    imagePath: '/actors/Albertosi_Louis.jpg',
  },
];

export default function Comediens() {
  return (
    <div className={styles.container}>
      <h1>Les comédiens</h1>
      <div className={styles.actorsContainer}>
        {actors.map(actor => (
          <ActorProfile
            key={actor.name}
            name={actor.name}
            imagePath={actor.imagePath}
            id={actor.name.toLowerCase().replace(/\s+/g, '-')}
          />
        ))}
      </div>
    </div>
  );
}
