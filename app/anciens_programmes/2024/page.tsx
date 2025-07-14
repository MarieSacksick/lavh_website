'use client';
import styles from '@/app/page.module.css';
import Image from 'next/image';
// import bandeau logos
import BandeauLogos from '@/app/components/BandeauLogos/BandeauLogos';
import Link from 'next/link';
import { comediens } from '@/app/data/comediens';
import ComedienPhoto from '@/app/components/ComedienPhoto/ComedienPhoto';
import ComedienDialog from '@/app/components/ComedienDialog/ComedienDialog';
import { useState } from 'react';
import { Comedien } from '@/app/types/comediens';
import { getProgrammeComponent } from '@/app/components/Programme';

export default function Home() {
  const [selectedComedien, setSelectedComedien] = useState<Comedien | null>(null);

  const year = 2024;

  // Filter comediens and partners based on the current year
  const filteredComediens = comediens
    .filter(comedien => comedien.years_present.includes(year)
  );

  // Dynamically get the Programme component for the year
  const Programme = getProgrammeComponent(year);

  return (
    <>
      {/* -----  Page d'accueil -----  */}
      <div className={styles.page}>
        {/* -----  Titre de la page  -----  */}
        <h1>Littérature à voix haute - Bessin 2024</h1>
        {/* -----  Contenu de la page  -----  */}
        <div className={styles.content}>
          {/* -----  Illustration de Jean Moulin et sa légende -----  */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Image
              className={styles.imgPortrait}
              src="/jean_moulin.png"
              alt="Portrait de Jean Moulin"
              width={1000}
              height={1000}
            />
            <Link
              href={'https://gillessacksick.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site de Gilles Sacksick"
            >
              <p className={styles.imageCaption}>
                &ldquo;Jean Moulin&rdquo;, une peinture de Gilles Sacksick
              </p>
            </Link>
          </div>
          {/* -----  Contenu à droite de l'illustration  -----  */}
          <div className={styles.rightContent}>
            <div className={styles.comedienPhotos}>
              {filteredComediens.map(comedien => (
                <ComedienPhoto
                  key={comedien.nom}
                  {...comedien}
                  onClick={() => setSelectedComedien(comedien)}
                />
              ))}
            </div>
            <h2
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginBlock: '1rem',
              }}
            >
              <span>Littérature à Voix Haute présente</span>
              <span>Du 17 au 24 août 2024</span>
            </h2>

            <Programme onComedienClick={setSelectedComedien} />

            <p className={styles.artistInfo}>Gay Lee Tischbirek, flûte - Alice Heimstaedt, danse</p>

            {/* -----  Informations sur les tarifs   -----  */}
            <div className={styles.tarifs}>
              <p>
                Prix des places : <span>13 €</span>
              </p>
              <p>
                PASS : <span>75 € </span>
              </p>
              <p>
                Tarif jeune public : <span>3 €</span>
              </p>
              <p>CB acceptée</p>
            </div>
            
            {/* -----  Logos LAVH et Partenaires   -----  */}
            <BandeauLogos year={year} />
          </div>
        </div>
      </div>
      {/* -----  Boîte de Dialogue avec description des comédiens -----  */}
      {selectedComedien && (
        <ComedienDialog comedien={selectedComedien} onClose={() => setSelectedComedien(null)} />
      )}
    </>
  );
}
