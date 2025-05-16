import styles from './page.module.css';
import EventItem from './components/EventItem/EventItem';
import Image from 'next/image';
import PriceInfoItem from './components/PriceInfoItem/PriceInfoItem';
import ActorsPictures from './components/ActorsPictures/ActorsPictures';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Littérature à voix haute - Bessin 2024</h1>
      <div className={styles.content}>
        <Image
          className={styles.imgPortrait}
          src="/image_background_jean_moulin.jpg"
          alt="Portrait de Jean Moulin"
          width={1000}
          height={1000}
        />
        <div className={styles.textContainer}>
          <ActorsPictures />
          <h2>
            <p>Littérature à Voix Haute présente</p>
            <p>du 17 au 24 août 2024</p>
          </h2>
          <div className={styles.eventsContainer}>
            <Image
              src="/logo_sldb.png"
              alt="Portrait de Jean Moulin"
              width={336}
              height={205}
              className={styles.imgLogoSldb}
            />
            <PriceInfoItem displayFor="mobile" />
            <EventItem
              date="SAMEDI 17 AOÛT"
              hour="19H30"
              place="ASNELLES, Douce Souvenance"
              bookTitle="Don Quichotte (« Le curieux malavisé »)"
              bookAuthor="MIGUEL DE CERVANTES"
              readerInfo="lecture de Thomas Sacksick"
            />
            <EventItem
              date="DIMANCHE 18 AOÛT"
              hour="19H30"
              place="TRACY-SUR-MER, Château de Tracy"
              bookTitle="Le moulin sur la Floss"
              bookAuthor="GEORGE ELIOT"
              readerInfo="lecture de Mélodie Richard"
            />
            <EventItem
              date="LUNDI 19 AOÛT"
              hour="19H30"
              place="ASNELLES, Douce Souvenance"
              bookTitle="Mars"
              bookAuthor="FRITZ ZORN"
              readerInfo="lecture de Louis Albertosi"
            />
            <PriceInfoItem displayFor="desktop" />
            <EventItem date="MARDI 20 AOÛT" place="VER-SUR-MER, Ancienne école des filles">
              <p>
                <span className={styles.eventTime}>16H</span> - <em>Petite sœur</em>
              </p>
              <p>
                <span className={styles.authorName}>JON FOSSE</span>{' '}
                <strong>(prix Nobel 2023)</strong>
              </p>
              <p>lecture jeune-public de Marion Rochmann</p>
              <p>
                <span className={styles.eventTime}>19H30</span> - présentation de l&apos;atelier
                participatif
              </p>
              <p className={styles.italicText}>Vos poèmes ou ceux des autres (entrée libre)</p>
            </EventItem>
            <EventItem
              date="MERCREDI 21 AOÛT"
              hour="19H30"
              place="LES VERGERS DE DUCY"
              bookTitle="Joseph"
              bookAuthor="MARIE-HÉLÈNE LAFON"
              readerInfo="lecture d'Evelyne Istria"
            />
            <EventItem
              date="JEUDI 22 AOÛT"
              hour="19H30"
              place="CHÂTEAU DE CREULLY"
              bookTitle="Voyage au bout de la nuit"
              bookAuthor="LOUIS-FERDINAND CÉLINE"
              readerInfo="lecture de Guillaume Lévêque"
            />
            <EventItem
              date="VENDREDI 23 AOÛT"
              hour="19H30"
              place="ARROMANCHES, Salle des fêtes"
              bookTitle="Alias Caracalla"
              bookAuthor="DANIEL CORDIER"
              readerInfo="lecture d'André Marcon"
            />
            <EventItem
              date="SAMEDI 24 AOÛT"
              hour="19H30"
              place="GRAYE-SUR-MER, La grange aux dîmes"
              bookTitle="Le Choix de Sophie"
              bookAuthor="WILLIAM STYRON"
              readerInfo="lecture de Thomas Sacksick"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
