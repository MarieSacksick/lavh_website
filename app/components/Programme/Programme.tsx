import styles from './Programme.module.css';
import Image from 'next/image';

const getGoogleMapsUrl = (place: string) => {
  const encodedPlace = encodeURIComponent(place);
  return `https://www.google.com/maps/search/?api=1&query=${encodedPlace},France`;
};

export default function Programme() {
  return (
    <div className={styles.container}>
      <Image
        src="/logos/logo_sldb.png"
        alt="Logo Soirées littéraires du Bessin"
        width={200}
        height={105}
        className={styles.logoSldb}
      />
      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            SAMEDI 17 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={`https://www.google.fr/maps/place/8+Rue+Vigor,+14960+Asnelles/@49.3355191,-0.5855789,18.86z/data=!4m6!3m5!1s0x480a56437c028945:0x880b6ba83e57de82!8m2!3d49.3356143!4d-0.5848771!16s%2Fg%2F11ltbr6p9w?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            ASNELLES, Douce Souvenance
          </a>
        </div>
        <span className={styles.titreOeuvre}>Don Quichotte (« Le curieux malavisé »)</span>
        <span className={styles.auteurOeuvre}>MIGUEL DE CERVANTÈS</span>
        <div className={styles.readerName}>lecture de Thomas Sacksick</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            DIMANCHE 18 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('TRACY-SUR-MER, Château de Tracy')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            TRACY-SUR-MER, Château de Tracy
          </a>
        </div>
        <span className={styles.titreOeuvre}>Le moulin sur la Floss</span>
        <span className={styles.auteurOeuvre}>GEORGE ELIOT</span>
        <div className={styles.readerName}>lecture de Mélodie Richard</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            LUNDI 19 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('ASNELLES, Douce Souvenance')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            ASNELLES, Douce Souvenance
          </a>
        </div>
        <span className={styles.titreOeuvre}>Mars</span>
        <span className={styles.auteurOeuvre}>FRITZ ZORN</span>
        <div className={styles.readerName}>lecture de Louis Albertosi</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            MARDI 20 AOÛT
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('VER-SUR-MER, Ancienne école des filles')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            VER-SUR-MER, Ancienne école des filles
          </a>
        </div>
        <p>
          <span className={styles.eventTime}>16H</span> -{' '}
          <span className={styles.titreOeuvre}>Petite sœur</span>
        </p>
        <p>
          <span className={styles.auteurOeuvre}>JON FOSSE</span> (prix Nobel 2023)
        </p>
        <div className={styles.readerName}>lecture jeune-public de Marion Rochmann</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            MERCREDI 21 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('LES VERGERS DE DUCY')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            LES VERGERS DE DUCY
          </a>
        </div>
        <span className={styles.titreOeuvre}>Joseph</span>
        <span className={styles.auteurOeuvre}>MARIE-HÉLÈNE LAFON</span>
        <div className={styles.readerName}>{`lecture d'Evelyne Istria`} </div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            JEUDI 22 AOÛT <span>19H30</span>
          </a>
        </h3>

        <a
          href={getGoogleMapsUrl('CHÂTEAU DE CREULLY')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.placeLink}
        >
          CHÂTEAU DE CREULLY
        </a>

        <span className={styles.titreOeuvre}>Voyage au bout de la nuit</span>
        <span className={styles.auteurOeuvre}>LOUIS-FERDINAND CÉLINE</span>
        <div className={styles.readerName}>lecture de Guillaume Lévêque</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            VENDREDI 23 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('ARROMANCHES, Salle des fêtes')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            ARROMANCHES, Salle des fêtes
          </a>
        </div>
        <span className={styles.titreOeuvre}>Alias Caracalla</span>
        <span className={styles.auteurOeuvre}>DANIEL CORDIER</span>
        <div className={styles.readerName}>{`lecture d'André Marcon`}</div>
      </div>

      <div className={styles.jour}>
        <h3>
          <a href="/dossier-programme_SLdB24.pdf" target="_blank" rel="noopener noreferrer">
            SAMEDI 24 AOÛT <span>19H30</span>
          </a>
        </h3>
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl('GRAYE-SUR-MER, La grange aux dîmes')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            GRAYE-SUR-MER, La grange aux dîmes
          </a>
        </div>
        <span className={styles.titreOeuvre}>Le Choix de Sophie</span>
        <span className={styles.auteurOeuvre}>WILLIAM STYRON</span>
        <div className={styles.readerName}>lecture de Thomas Sacksick</div>
      </div>
    </div>
  );
}
