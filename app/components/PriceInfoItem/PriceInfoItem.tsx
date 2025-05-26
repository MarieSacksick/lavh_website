import styles from './PriceInfoItem.module.css';

export default function PriceInfoItem({
  displayFor = 'desktop',
}: {
  displayFor?: 'mobile' | 'desktop';
}) {
  return (
    <div
      className={`${styles.container} ${displayFor === 'mobile' ? styles.displayOnMobile : styles.displayOnDesktop}`}
    >
      <p>
        Prix des places : <span>13 €</span>
      </p>
      <p>
        PASS : <span>75 € - CB</span> acceptée
      </p>
      <p>
        Tarif jeune public : <span>3 €</span>
      </p>
    </div>
  );
}
