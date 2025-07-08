'use client';
import styles from './page.module.css';
import Image from 'next/image';
import BandeauLogos from './components/BandeauLogos/BandeauLogos';
import Link from 'next/link';
import { comediens } from './data/comediens';
import ComedienPhoto from './components/ComedienPhoto/ComedienPhoto';
import ComedienDialog from './components/ComedienDialog/ComedienDialog';
import { useState } from 'react';
import { Comedien } from './types/comediens';
import { getProgrammeComponent } from './components/Programme';

export default function Home() {
  const [selectedComedien, setSelectedComedien] = useState<Comedien | null>(null);

  const year = 2025;

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
        {/* -----  Contenu de la page  -----  */}
        <div className={styles.content}>
          {/* -----  Illustration de Virginia Woolf et sa légende -----  */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Image
              className={styles.imgPortrait}
              src="/virginia_woolf.jpg"
              alt="Portrait de Virginia Woolf"
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
                &ldquo;Virginia Woolf&rdquo;, une peinture de Gilles Sacksick
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
                color: '#00498b',
              }}
            >
              <span>Littérature à Voix Haute présente du 15 au 22 août 2025</span>
            </h2>
            <div 
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#00498b',
                marginTop: '-1rem',
              }}>
              <span className={styles.scheduleLine}>
                (tous les soirs à <span>19h30</span>, sauf le <span>lundi 18 août</span> à 15h30)
              </span>
            </div>

            <Programme onComedienClick={setSelectedComedien} />

            <p className={styles.artistInfo}>Gay Lee Tischbirek, flûte</p>

            {/* -----  Informations sur les tarifs   -----  */}
            <div className={styles.tarifs}>
              <p>
                Prix des places : <span>14 €</span>
              </p>
              <p>
                Pass : <span>80 €</span>
              </p>
              <p>
                Lecture Andersen pour les enfants, tarif unique : <span>5 €</span>
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
