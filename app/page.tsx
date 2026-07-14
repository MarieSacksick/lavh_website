'use client';
import styles from './page.module.css';
import BandeauLogos from './components/BandeauLogos/BandeauLogos';
import ComedienDialog from './components/ComedienDialog/ComedienDialog';
import { useState } from 'react';
import { Comedien } from './types/comediens';
import { getProgrammeComponent } from './components/Programme';

export default function Home() {
  const [selectedComedien, setSelectedComedien] = useState<Comedien | null>(null);

  const year = 2026;

  // Dynamically get the Programme component for the year
  const Programme = getProgrammeComponent(year);

  return (
    <>
      {/* -----  Page d'accueil -----  */}
      <div className={styles.page}>
        {/* -----  Contenu de la page  -----  */}
        <br></br>
        <div className={styles.rightContent}>
          <Programme onComedienClick={setSelectedComedien} />

          {/* -----  Logos LAVH et Partenaires   -----  */}
          <BandeauLogos year={year} />
        </div>
      </div>
      {/* -----  Boîte de Dialogue avec description des comédiens -----  */}
      {selectedComedien && (
        <ComedienDialog comedien={selectedComedien} onClose={() => setSelectedComedien(null)} year={year} />
      )}
    </>
  );
}
