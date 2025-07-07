import styles from './Programme.module.css';
import Image from 'next/image';
import { comediens } from '@/app/data/comediens';
import { Comedien } from '@/app/types/comediens';

/**
 * Génère l'URL du PDF du programme pour une date donnée
 * @param {string} date - La date du programme (ex: "SAMEDI 17 AOÛT")
 * @returns {string} L'URL du PDF correspondant à la date
 */
const getPdfUrl = (date: string) => {
  const dateMap: { [key: string]: string } = {
    'SAMEDI 17 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'DIMANCHE 18 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'LUNDI 19 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'MARDI 20 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'MERCREDI 21 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
    'JEUDI 22 AOÛT': 'dossier-programme_SLdB24-2-samedi-17.pdf',
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

      {/* -----  Vendredi 15 août -----  */}
      <div className={styles.jour}>
        <h3>
          VENDREDI 15 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Ch%C3%A2teau+de+Tracy/@49.3263169,-0.6488937,17z/data=!3m1!4b1!4m6!3m5!1s0x480a55adbd9336ab:0x9445fa8f58be5dff!8m2!3d49.3263169!4d-0.6463188!16s%2Fg%2F11fs8tzwb2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            TRACY-SUR-MER, Château de Tracy
          </a>
        </div>
        <span className={styles.titreOeuvre}>Taïpi</span>
        <span className={styles.auteurOeuvre}>Herman Melville</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
          lecture de Thomas Sacksick
        </a>
      </div>

      {/* -----  Samedi 16 août -----  */}
      <div className={styles.jour}>
        <h3>
          Samedi 16 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Le+Ch%C3%A2teau,+14400+Esquay-sur-Seulles/@49.2725119,-0.6170714,17.46z/data=!4m6!3m5!1s0x480a53fcb480da4f:0x91a36214f91a7992!8m2!3d49.2725138!4d-0.6151544!16s%2Fg%2F1tvt9r9y?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            Château d'Esquay
          </a>
        </div>
        <span className={styles.titreOeuvre}>La Chronique de Copenhague, Enfance</span>
        <span className={styles.auteurOeuvre}>Tove Ditlevsen</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Céline Samie')}>
          lecture de Céline Samie
        </a>
      </div>

      {/* -----  Dimanche 17 août -----  */}
      <div className={styles.jour}>
        <h3>
          Dimanche 17 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Ch%C3%A2teau+d'Audrieu/@49.2038803,-0.5974105,17z/data=!3m1!4b1!4m9!3m8!1s0x480a51e6c68bde81:0x285bff8889ef02c7!5m2!4m1!1i2!8m2!3d49.2038803!4d-0.5948356!16s%2Fg%2F11dykpkfz?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            Château d'Audrieu
          </a>
        </div>
        <span className={styles.titreOeuvre}>Vers le phare</span>
        <span className={styles.auteurOeuvre}>Virginia Woolf</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Anne Kesler')}>
          lecture d'Anne Kessler
        </a>
      </div>

      {/* -----  Lundi 18 août -----  */}
      <div className={styles.jour}>
        <h3>
          Lundi 18 AOÛT
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
          <span className={styles.titreOeuvre}>Le Vilan petit canard</span>
          <span className={styles.auteurOeuvre}>Hans Christian Andersen</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Louis Albertosi')}>
          lecture jeune-public de Louis Albertosi
        </a>
      </div>

      {/* -----  Mardi 19 août -----  */}
      <div className={styles.jour}>
        <h3>
          Mardi 19 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Frm+de+l'%C3%89glise,+14480+Creully+sur+Seulles/@49.2934967,-0.5663944,18.11z/data=!4m6!3m5!1s0x480a5727d264e3f9:0xc75fb20ddf990ecd!8m2!3d49.2935156!4d-0.5652567!16s%2Fg%2F1tj7dfp5?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            VILLIERS-LE-SEC, Ferme-Manoir
          </a>
        </div>
        <span className={styles.titreOeuvre}>Le Très-Bas</span>
        <span className={styles.auteurOeuvre}>Christian Bobin</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Louis Albertosi')}>
          lecture de Louis Albertosi
        </a>
      </div>

      {/* -----  Mercredi 20 août -----  */}
      <div className={styles.jour}>
        <h3>
          Mercredi 20 AOÛT
        </h3>

        <a
          href="https://www.google.fr/maps/place/Saint-Gabriel-Br%C3%A9cy+Priory/@49.2790423,-0.5704204,17z/data=!4m14!1m7!3m6!1s0x480a50d5c7bf4651:0x3e4d911a365b7181!2sSaint-Gabriel-Br%C3%A9cy+Priory!8m2!3d49.2790424!4d-0.5655495!16s%2Fg%2F1hb_dvjwb!3m5!1s0x480a50d5c7bf4651:0x3e4d911a365b7181!8m2!3d49.2790424!4d-0.5655495!16s%2Fg%2F1hb_dvjwb?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.placeLink}
        >
          Saint-Gabriel Brécy, Prieuré
        </a>

        <span className={styles.titreOeuvre}>Klara et le Soleil</span>
        <span className={styles.auteurOeuvre}>KAZUO ISHIGURO</span>  (prix Nobel de littérature 2017)
        <a className={styles.readerName} onClick={() => handleComedienClick('Yasmina Remil')}>
          lecture de Yasmina Remil
        </a>
      </div>

      {/* -----  Jeudi 21 août -----  */}
      <div className={styles.jour}>
        <h3>
          Jeudi 21 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Salle+des+F%C3%AAtes/@49.339945,-0.6238122,17z/data=!3m1!4b1!4m6!3m5!1s0x480a55dcee449c73:0xd601a8ba19596011!8m2!3d49.339945!4d-0.6212373!16s%2Fg%2F11cs2wy6vv?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            ARROMANCHES, Salle des fêtes
          </a>
        </div>
        <span className={styles.titreOeuvre}>Vendredi ou la vie sauvage</span>
        <span className={styles.auteurOeuvre}>Michel Tournier</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Matthieu Marie')}>
          lecture de Matthieu Marie
        </a>
      </div>

      {/* -----  Vendredi 22 août -----  */}
      <div className={styles.jour}>
        <h3>
          Vendredi 22 AOÛT
        </h3>
        <div className={styles.place}>
          <a
            href="https://www.google.fr/maps/place/Ch%C3%A2teau+de+Vaulaville,+14400+Tour-en-Bessin/@49.3110778,-0.7719571,16.11z/data=!4m10!1m2!2m1!1sCh%C3%A2teau+de+Vaulaville,+Tour-en-Bessin!3m6!1s0x480babc5c2d541b1:0x7e9b959f0977f0fd!8m2!3d49.310576!4d-0.771936!15sCiZDaMOidGVhdSBkZSBWYXVsYXZpbGxlLCBUb3VyLWVuLUJlc3NpbpIBBnBhbGFjZeABAA!16s%2Fg%2F11f3y54k2c?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.placeLink}
          >
            Château de Vaulaville
          </a>
        </div>
        <span className={styles.titreOeuvre}>Odyssée</span>
        <span className={styles.auteurOeuvre}>Homère</span>
        <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
          lecture de Thomas Sacksick
        </a>
      </div>
    </div>
  );
}
