'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { comediens } from '../data/comediens';
import ComedienPhoto from '../components/ComedienPhoto/ComedienPhoto';
import ComedienDialog from '../components/ComedienDialog/ComedienDialog';

export default function Comediens() {
  const [selectedcomedien, setSelectedcomedien] = useState<(typeof comediens)[0] | null>(null);

  return (
    <div className={styles.container}>
      <h1>Les comédiens</h1>
      <div className={styles.comediensGrid}>
        {comediens.map(comedien => (
          <div key={comedien.id} onClick={() => setSelectedcomedien(comedien)}>
            <ComedienPhoto {...comedien} />
          </div>
        ))}
      </div>
      {selectedcomedien && (
        <ComedienDialog comedien={selectedcomedien} onClose={() => setSelectedcomedien(null)} />
      )}
    </div>
  );
}
