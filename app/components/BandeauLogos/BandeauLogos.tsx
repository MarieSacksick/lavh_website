import styles from './BandeauLogos.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Partner = { name: string; logo: string; website: string };

const partners: Partner[] = [
  {
    name: 'Littérature à Voix Haute',
    logo: '/logo.jpg',
    website: 'https://www.litteratureavoixhaute.com/',
  },
  {
    name: 'Seulles Terre et Mer',
    logo: '/logos/Logo_Seulles_terre et mer copie.jpg',
    website: 'https://seulles-terre-mer.fr/',
  },
  {
    name: 'Conseil Général du Calvados',
    logo: '/logos/conseil_général_calvados.jpeg',
    website: 'https://www.calvados.fr/accueil.html',
  },
  {
    name: 'Creully sur Seulles',
    logo: '/logos/logo Creully sur Seulles copie.png',
    website: 'https://creully-sur-seulles.fr/',
  },
  {
    name: 'Tracy sur Mer',
    logo: '/logos/Logo Tracy copie.jpg',
    website: 'https://tracy-sur-mer.fr/',
  },
  {
    name: 'Friendly Home Bayeux',
    logo: '/logos/friendly_home_bagneux.png',
    website: 'https://www.facebook.com/friendlyhomebayeux/',
  },
  {
    name: 'Arromanches Loisirs Culture',
    logo: '/logos/Arromanches Loisirs Culture.jpg',
    website: 'https://www.arromanches.com/associations/details.php?assoc_id=32',
  },
];

export default function BandeauLogos() {
  return (
    <div className={styles.container}>
      {partners.map(partner => (
        <Link
          key={partner.name}
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoWrapper}
        >
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            width={1000}
            height={1000}
            className={styles.logoImg}
          />
        </Link>
      ))}
    </div>
  );
}
