'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { actors } from '../data/actors';
import ComedienPhoto from '../components/ComedienPhoto/ComedienPhoto';
import ActorDialog from '../components/ActorDialog/ActorDialog';

export default function Comediens() {
  const [selectedActor, setSelectedActor] = useState<(typeof actors)[0] | null>(null);

  return (
    <div className={styles.container}>
      <h1>Les comédiens</h1>
      <div className={styles.actorsGrid}>
        {actors.map(actor => (
          <div key={actor.id} onClick={() => setSelectedActor(actor)}>
            <ComedienPhoto {...actor} />
          </div>
        ))}
      </div>
      {selectedActor && (
        <ActorDialog actor={selectedActor} onClose={() => setSelectedActor(null)} />
      )}
    </div>
  );
}
