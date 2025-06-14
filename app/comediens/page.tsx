'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { comediens } from '../data/comediens';
import ComedienPhoto from '../components/ComedienPhoto/ComedienPhoto';
import ComedienDialog from '../components/ComedienDialog/ComedienDialog';

export default function Comediens() {
  const [selectedComedien, setSelectedComedien] = useState<(typeof comediens)[0] | null>(null);

  return (
    <>
      {/* -----  Page Comédiens -----  */}
      <div className={styles.container}>
        {/* -----  Titre de la page  -----  */}
        <h1>Les comédiens</h1>
        {/* -----  Contenu de la page  -----  */}
        <div className={styles.comediensGrid}>
          {comediens.map(comedien => (
            <div key={comedien.id} onClick={() => setSelectedComedien(comedien)}>
              <ComedienPhoto {...comedien} />
            </div>
          ))}
        </div>
      </div>

      {/* -----  Boîte de Dialogue avec description des comédiens -----  */}
      {selectedComedien && (
        <ComedienDialog comedien={selectedComedien} onClose={() => setSelectedComedien(null)} />
      )}
    </>
  );
}
