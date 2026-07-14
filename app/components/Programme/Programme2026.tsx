import styles from './Programme.module.css';
import pageStyles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { comediens } from '@/app/data/comediens';
import { Comedien } from '@/app/types/comediens';
import ComedienPhoto from '@/app/components/ComedienPhoto/ComedienPhoto';

const YEAR = 2026;

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
 * Ce composant affiche le programme complet des soirées, réparti sur 3 colonnes
 * (comme sur l'affiche 2026) avec :
 * - Les dates et horaires
 * - Les lieux (avec liens Google Maps)
 * - Les œuvres et auteurs
 * - Les comédiens (avec liens vers leurs profils)
 * - Les illustrations de Gilles Sacksick et les informations pratiques
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

  const filteredComediens = comediens.filter(comedien => comedien.years_present.includes(YEAR));

  return (
    <div className={styles.headerAndColumns}>
      <div className={styles.leftBlock}>
        {/* -----  Frise des comédiens et texte introductif -----  */}
        <div className={pageStyles.comedienPhotosHuit}>
          {filteredComediens.map(comedien => (
            <ComedienPhoto
              key={comedien.nom}
              {...comedien}
              year={YEAR}
              onClick={() => onComedienClick(comedien)}
            />
          ))}
        </div>
        <h2 className={styles.introTitle}>
          Littérature à Voix Haute présente du 14 au 21 août 2026
        </h2>
        <div
          style={{
            textAlign: 'center',
            //display: 'flex',
            //flexDirection: 'column',
            color: '#00498b',
            fontSize: 'small',
            marginTop: '-0.3rem',
          }}>
          <span className={pageStyles.scheduleLine}>
            (tous les soirs à <span>19h30</span>, sauf Alphonse Daudet à <span>15h30</span>)
          </span>
        </div>

        <div className={styles.twoColumns}>
      {/* -----  Colonne 1 : vendredi 14 → dimanche 16, illustration Job en bas -----  */}
      <div className={styles.column}>
        <Image
          src="/logos/logo_sldb.png"
          alt="Logo Soirées littéraires du Bessin"
          width={200}
          height={105}
          className={styles.logoSldb}
        />

        {/* -----  Vendredi 14 août -----  */}
        <div className={styles.jour}>
          <h3>VENDREDI 14 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://maps.app.goo.gl/6ch31nTj7Q9FeDoD6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              CHÂTEAU DE MEUVAINES
            </a>
          </div>
          <span className={styles.titreOeuvre}>Gaspard des Montagnes</span>
          <span className={styles.auteurOeuvre}>Henri Pourrat</span>
          <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
            lecture de Thomas Sacksick
          </a>
        </div>

        {/* -----  Samedi 15 août -----  */}
        <div className={styles.jour}>
          <h3>SAMEDI 15 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://www.google.fr/maps/place/Ch%C3%A2teau+de+Vaulaville,+14400+Tour-en-Bessin/@49.3110778,-0.7719571,16.11z/data=!4m10!1m2!2m1!1sCh%C3%A2teau+de+Vaulaville,+Tour-en-Bessin!3m6!1s0x480babc5c2d541b1:0x7e9b959f0977f0fd!8m2!3d49.310576!4d-0.771936!15sCiZDaMOidGVhdSBkZSBWYXVsYXZpbGxlLCBUb3VyLWVuLUJlc3NpbpIBBnBhbGFjZeABAA!16s%2Fg%2F11f3y54k2c?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              CHÂTEAU DE VAULAVILLE
            </a>
          </div>
          <span className={styles.titreOeuvre}>Aimé Pache, peintre vaudois</span>
          <span className={styles.auteurOeuvre}>C.F. Ramuz</span>
          <a className={styles.readerName} onClick={() => handleComedienClick('Pierre-François Garel')}>
            lecture de Pierre-François Garel
          </a>
        </div>

        {/* -----  Dimanche 16 août -----  */}
        <div className={styles.jour}>
          <h3>DIMANCHE 16 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://www.google.fr/maps/place/Ch%C3%A2teau+de+Tracy/@49.3263169,-0.6488937,17z/data=!3m1!4b1!4m6!3m5!1s0x480a55adbd9336ab:0x9445fa8f58be5dff!8m2!3d49.3263169!4d-0.6463188!16s%2Fg%2F11fs8tzwb2?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              CHÂTEAU DE TRACY
            </a>
          </div>
          <span className={styles.titreOeuvre}>{`Une « jolie païenne » devant Dieu`}</span>
          <span className={styles.auteurOeuvre}>Madame de Sévigné</span>
          <p style={{ margin: 0, fontSize: 'small' }}>
            choix des lettres et présentation de Patrice Soler
          </p>
          <a className={styles.readerName} onClick={() => handleComedienClick('Catherine Salviat')}>
            lecture de Catherine Salviat
          </a>
        </div>

        <Link
          href={'https://gillessacksick.com/'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site de Gilles Sacksick"
        >
          <Image
            src="/Job.jpg"
            alt="Illustration, Gilles Sacksick"
            width={260}
            height={193}
            className={styles.columnIllustrationSmall}
          />
        </Link>
      </div>

      {/* -----  Colonne 2 : lundi 17 → mercredi 19 -----  */}
      <div className={styles.column}>
        {/* -----  Lundi 17 août -----  */}
        <div className={styles.jour}>
          <h3>LUNDI 17 AOÛT</h3>
          <div className={styles.place}>
            <a
              href={`https://maps.app.goo.gl/TgS74ydGzDqap5C29`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              ASNELLES, Douce Souvenance
            </a>
          </div>

          <div className={styles.subEvent}>
            <span className={styles.eventTime}>15h30</span>
            <br />
            <span className={styles.titreOeuvre}>La Chèvre de monsieur Seguin</span>
            <br />
            <span className={styles.auteurOeuvre}>Alphonse Daudet</span>
            <br />
            <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
              lecture jeune-public de Thomas Sacksick
            </a>
          </div>

          <div className={styles.subEvent} style={{ marginTop: '0.5rem' }}>
            <span className={styles.eventTime}>19h30</span>
            <br />
            <span className={styles.titreOeuvre}>La Ferme africaine</span>
            <br />
            <span className={styles.auteurOeuvre}>Karen Blixen</span>
            <br />
            <a className={styles.readerName} onClick={() => handleComedienClick('Christèle Tual')}>
              lecture de Christèle Tual
            </a>
          </div>
        </div>

        {/* -----  Mardi 18 août -----  */}
        <div className={styles.jour}>
          <h3>MARDI 18 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://www.google.fr/maps/search/Ferme+culturelle+du+Bessin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              Ferme culturelle du Bessin
            </a>
          </div>
          <span className={styles.titreOeuvre}>Bambi, histoire d’une vie dans les bois</span>
          <span className={styles.auteurOeuvre}>Félix Salten</span>
          <a className={styles.readerName} onClick={() => handleComedienClick('Yasmina Remil')}>
            lecture de Yasmina Remil
          </a>
        </div>

        {/* -----  Mercredi 19 août -----  */}
        <div className={styles.jour}>
          <h3>MERCREDI 19 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://maps.app.goo.gl/eoRyPV9iy71SZKZw9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              CHÂTEAU DE FONTAINE-HENRY
            </a>
          </div>
          <span className={styles.titreOeuvre}>La Vagabonde</span>
          <span className={styles.auteurOeuvre}>Colette</span>
          <a className={styles.readerName} onClick={() => handleComedienClick('Josiane Stoléru')}>
            lecture de Josiane Stoléru
          </a>
        </div>

        {/* -----  Jeudi 20 août -----  */}
        <div className={styles.jour}>
          <h3>JEUDI 20 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://www.google.fr/maps/place/Salle+des+F%C3%AAtes/@49.339945,-0.6238122,17z/data=!3m1!4b1!4m6!3m5!1s0x480a55dcee449c73:0xd601a8ba19596011!8m2!3d49.339945!4d-0.6212373!16s%2Fg%2F11cs2wy6vv?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              ARROMANCHES, Salle des fêtes
            </a>
          </div>
          <span className={styles.titreOeuvre}>Les Pauvres gens</span>
          <span className={styles.auteurOeuvre}>Dostoïevski</span>
          <p>
            <a className={styles.readerName} onClick={() => handleComedienClick('Mélodie Richard')}>
              lecture de Mélodie Richard
            </a>{' '}
            et{' '}
            <a className={styles.readerName} onClick={() => handleComedienClick('Philippe Duclos')}>
              Philippe Duclos
            </a>
          </p>
        </div>
      </div>
        </div>
      </div>

      {/* -----  Colonne 3 : illustration visage d'enfant en haut, vendredi 21, infos pratiques en bas -----  */}
      <div className={styles.column}>
        <Image
          src="/visage_enfant.jpg"
          alt="Illustration, Gilles Sacksick"
          width={130}
          height={111}
          className={styles.columnIllustrationLarge}
          style={{ marginTop: 0 }}
        />

        {/* -----  Vendredi 21 août -----  */}
        <div className={styles.jour}>
          <h3>VENDREDI 21 AOÛT</h3>
          <div className={styles.place}>
            <a
              href="https://www.google.fr/maps/search/Ch%C3%A2teau+de+Goville"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
            >
              CHÂTEAU DE GOVILLE
            </a>
          </div>
          <span className={styles.titreOeuvre}>La Marche de Radetsky</span>
          <span className={styles.auteurOeuvre}>Joseph Roth</span>
          <a className={styles.readerName} onClick={() => handleComedienClick('Thomas Sacksick')}>
            lecture de Thomas Sacksick
          </a>
        </div>

        {/* -----  Informations pratiques -----  */}
        <div className={styles.practicalInfo}>
          <p>Prix des places <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>15 €</span></p>
          <p>PASS lectures <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>90 €</span></p>
          <p>Moins de 30 ans <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>10 €</span></p>
          <p>Lecture Daudet pour les enfants <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>3 €</span></p>
          <p>CB acceptée</p>
          <p>
            Réservations très recommandées
            <br/>au <span className={styles.eventTime}>02 31 22 83 81</span> 
          </p>
          <p>ou sur notre{' '}
            <a href="https://app.nocodb.com/nc/form/888ef5cf-9754-4324-a6c4-0d3ab9569e5c" target="_blank" rel="noopener noreferrer">
              formulaire en ligne
            </a>
          </p>
        </div>
        <div className={styles.practicalInfo}>
          <p style={{fontSize: 'small' }}>Gay Lee Tischbirek, flûte</p>
          <p> <span style={{ fontStyle: 'italic'}}>Illustrations</span>, Gilles Sacksick</p>
        </div>
      </div>
    </div>
  );
}
