'use client';
import styles from './page.module.css';
import ComedienDialog from './components/ComedienDialog/ComedienDialog';
import EvenementPeguy from './components/EvenementPeguy/EvenementPeguy';
import { useState } from 'react';
import { Comedien } from './types/comediens';

export default function Home() {
  const [selectedComedien, setSelectedComedien] = useState<Comedien | null>(null);

  const year = 2026;

  return (
    <>
      {/* -----  Page d'accueil : annonce de la lecture "Charles Péguy" à la Cathédrale de Bayeux -----  */}
      <div className={styles.page}>
        {/* -----  Contenu de la page  -----  */}
        <br></br>
        <div className={styles.rightContent}>
          <EvenementPeguy onComedienClick={setSelectedComedien} />
        </div>
      </div>
      {/* -----  Boîte de Dialogue avec description de la comédienne -----  */}
      {selectedComedien && (
        <ComedienDialog comedien={selectedComedien} onClose={() => setSelectedComedien(null)} year={year} />
      )}
    </>
  );
}
