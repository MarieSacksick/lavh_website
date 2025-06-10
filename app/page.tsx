'use client';
import styles from './page.module.css';
import Image from 'next/image';
import BandeauLogos from './components/BandeauLogos/BandeauLogos';
import Programme from './components/Programme/Programme';
import Link from 'next/link';
import { comediens } from './data/comediens';
import ComedienPhoto from './components/ComedienPhoto/ComedienPhoto';
import ComedienDialog from './components/ComedienDialog/ComedienDialog';
import { useState } from 'react';
import { Comedien } from './types/comediens';

export default function Home() {
  const [selectedComedien, setSelectedComedien] = useState<Comedien | null>(null);

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
              src="jean_moulin.png"
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
              {comediens.map(comedien => (
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
            <BandeauLogos />
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
