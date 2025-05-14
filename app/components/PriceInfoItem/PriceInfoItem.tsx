import styles from './PriceInfoItem.module.css';

export default function PriceInfoItem() {
  return (
    <div className={styles.container}>
      <p>
        Prix des places : <span>13 €</span>
      </p>
      <p>
        PASS : <span>75 € - CB</span> acceptée
      </p>
      <p>
        Tarif jeune public : <span>3 €</span>
      </p>
      <p>
        Inscription atelier-participatif : <span>30 €</span>
      </p>
    </div>
  );
}
