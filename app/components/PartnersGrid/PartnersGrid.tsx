import Image from 'next/image';
import styles from './PartnersGrid.module.css';

const partners = [
  {
    name: 'Conseil Général du Calvados',
    logo: '/logos/conseil_général_calvados.jpeg',
  },
  {
    name: 'Creully sur Seulles',
    logo: '/logos/logo Creully sur Seulles copie.png',
  },
  {
    name: 'Tracy sur Mer',
    logo: '/logos/Logo Tracy copie.jpg',
  },
  {
    name: 'Seulles Terre et Mer',
    logo: '/logos/Logo_Seulles_terre et mer copie.jpg',
  },
  {
    name: 'Friendly Home Bayeux',
    logo: '/logos/Friendly Home Bayeux.PNG',
  },
  {
    name: 'Image 003',
    logo: '/logos/image003 copie.jpg',
  },
];

export default function PartnersGrid() {
  return (
    <div className={styles.container}>
      <h2>Nos partenaires</h2>
      <div className={styles.logosContainer}>
        {partners.map(partner => (
          <div key={partner.name} className={styles.logoWrapper}>
            <Image
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              width={200}
              height={100}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
