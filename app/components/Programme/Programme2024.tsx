import styles from './Programme.module.css';
import Image from 'next/image';
import { comediens } from '@/app/data/comediens';
import { Comedien } from '@/app/types/comediens';

/**
 * Génère l'URL Google Maps pour un lieu donné
 * @param {string} place - Le nom du lieu à rechercher
 * @returns {string} L'URL Google Maps pour le lieu spécifié
 */
const getGoogleMapsUrl = (place: string) => {
  const encodedPlace = encodeURIComponent(place);
  return `https://www.google.com/maps/search/?api=1&query=${encodedPlace},France`;
};

/**
 * Génère l'URL du PDF du programme pour une date donnée
 * @param {string} date - La date du programme (ex: "SAMEDI 17 AOÛT")
 * @returns {string} L'URL du PDF correspondant à la date
 */
const getPdfUrl = (date: string) => {
  const dateMap: { [key: string]: string } = {
    'SAMEDI 17 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'DIMANCHE 18 AOÛT': 'dossier-programme_SLdB24-dimanche-18.pdf',
    'LUNDI 19 AOÛT': 'dossier-programme_SLdB24-4-lundi-19.pdf',
    'MARDI 20 AOÛT': 'dossier-programme_SLdB24-5-mardi-20.pdf',
    'MERCREDI 21 AOÛT': 'dossier-programme_SLdB24-7-mercredi-21.pdf',
    'JEUDI 22 AOÛT': 'dossier-programme_SLdB24-8-jeudi-22.pdf',
    'VENDREDI 23 AOÛT': 'dossier-programme_SLdB24-9-Vendredi-23.pdf',
    'SAMEDI 24 AOÛT': 'dossier-programme_SLdB24-10-samedi-24.pdf',
  };
  return `/dossier-programme_SLdB24/${dateMap[date]}`;
};

/**
 * Propriétés du composant Programme
 * @interface ProgrammeProps
 * @property {function} onComedienClick - Fonction appelée lorsqu'un comédien est sélectionné
 */
type ProgrammeProps = {
  onComedienClick: (comedien: Comedien) => void;
};

/**
 * Composant affichant le programme des Soirées Littéraires du Bessin
 *
 * @component
 * @description
 * Ce composant affiche le programme complet des soirées avec :
 * - Les dates et horaires
 * - Les lieux (avec liens Google Maps)
 * - Les œuvres et auteurs
 * - Les comédiens (avec liens vers leurs profils)
 * - Les liens vers les PDFs des programmes
 *
 * @param {ProgrammeProps} props - Les propriétés du composant
 * @param {function} props.onComedienClick - Fonction appelée lorsqu'un comédien est sélectionné
 *
 * @example
 * ```tsx
 * <Programme onComedienClick={(comedien) => handleComedienClick(comedien)} />
 * ```
 *
 * @returns {JSX.Element} Le programme complet des soirées
 */
export default function Programme({ onComedienClick }: ProgrammeProps) {
  /**
   * Recherche un comédien par son nom complet
   * @param {string} name - Le nom complet du comédien
   * @returns {Comedien | undefined} Le comédien trouvé ou undefined
   */
  const findComedienByName = (name: string) => {
    return comediens.find(
      comedien => `${comedien.prenom} ${comedien.nom}`.toLowerCase() === name.toLowerCase()
    );
  };

  /**
   * Gère le clic sur un nom de comédien
   * @param {string} name - Le nom complet du comédien
   */
  const handleComedienClick = (name: string) => {
    const comedien = findComedienByName(name);
    if (comedien) {
      onComedienClick(comedien);
    }
  };

  return (
    <div className={styles.container}>
      {/* -----  Logo Soirées Littéraires du Bessin -----  */}
      <Image
        src="/logos/logo_sldb.png"
        alt="Logo Soirées littéraires du Bessin"
        width={200}
        height={105}
        className={styles.logoSldb}
      />

      {/* -----  Samedi 17 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('SAMEDI 17 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
          lecture de Thomas Sacksick
        </a>
      </div>

      {/* -----  Dimanche 18 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('DIMANCHE 18 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Mélodie Richard')}>
          lecture de Mélodie Richard
        </a>
      </div>

      {/* -----  Lundi 19 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('LUNDI 19 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Louis Albertosi')}>
          lecture de Louis Albertosi
        </a>
      </div>

      {/* -----  Mardi 20 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('MARDI 20 AOÛT')} target="_blank" rel="noopener noreferrer">
            MARDI 20 AOÛT <span>16H</span>
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
          <span className={styles.titreOeuvre}>Petite sœur</span>
          <span className={styles.auteurOeuvre}>JON FOSSE</span> (prix Nobel 2023)
        <a className={styles.readerName} onClick={() => handleComedienClick('Marion Rochmann')}>
          lecture jeune-public de Marion Rochmann
        </a>
      </div>

      {/* -----  Mercredi 21 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('MERCREDI 21 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Evelyne Istria')}>
          {`lecture d'Evelyne Istria`}
        </a>
      </div>

      {/* -----  Jeudi 22 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('JEUDI 22 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Guillaume Lévêque')}>
          lecture de Guillaume Lévêque
        </a>
      </div>

      {/* -----  Vendredi 23 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('VENDREDI 23 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('André Marcon')}>
          {`lecture d'André Marcon`}
        </a>
      </div>

      {/* -----  Samedi 24 août -----  */}
      <div className={styles.jour}>
        <h3>
          <a href={getPdfUrl('SAMEDI 24 AOÛT')} target="_blank" rel="noopener noreferrer">
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
        <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
          lecture de Thomas Sacksick
        </a>
      </div>
    </div>
  );
}
