import styles from './page.module.css';
import Header from './components/Header/Header';
import EventItem from './components/EventItem/EventItem';
import Image from 'next/image';
import PriceInfoItem from './components/PriceInfoItem/PriceInfoItem';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
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
            <h2>
              <p>Littérature à Voix Haute présente</p>
              <p>du 17 au 24 août 2024</p>
            </h2>

            <div>
              <Image
                src="/logo_sldb.png"
                alt="Portrait de Jean Moulin"
                width={336}
                height={205}
                className={styles.imgLogoSldb}
              />
              <PriceInfoItem />
              <EventItem
                date="Samedi 17 août"
                hour="19h30"
                place="ASNELLES, Douce Souvenance"
                bookTitle={'Don Quichotte (« Le curieux malavisé »)'}
                bookAuthor="Miguel De Cervantès"
                readerInfo="lecture de Thomas Sacksick"
              />
              <EventItem
                date="Samedi 17 août"
                hour="19h30"
                place="ASNELLES, Douce Souvenance"
                bookTitle={'Don Quichotte (« Le curieux malavisé »)'}
                bookAuthor="Miguel De Cervantès"
                readerInfo="lecture de Thomas Sacksick"
              />
              <EventItem
                date="Samedi 17 août"
                hour="19h30"
                place="ASNELLES, Douce Souvenance"
                bookTitle={'Don Quichotte (« Le curieux malavisé »)'}
                bookAuthor="Miguel De Cervantès"
                readerInfo="lecture de Thomas Sacksick"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>This is the footer</footer>
    </div>
  );
}
