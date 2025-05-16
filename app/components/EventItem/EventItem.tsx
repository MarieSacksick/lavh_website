import { PropsWithChildren } from 'react';
import styles from './EventItem.module.css';
import pageStyles from '../../page.module.css';

const getGoogleMapsUrl = (place: string) => {
  const encodedPlace = encodeURIComponent(place);
  return `https://www.google.com/maps/search/?api=1&query=${encodedPlace},France`;
};

type Props = {
  date: string;
  hour?: string;
  place?: string;
  bookTitle?: string;
  bookAuthor?: string;
  readerInfo?: string;
};

export default function EventItem({
  date,
  place,
  bookTitle,
  bookAuthor,
  readerInfo,
  hour,
  children, // Use children if you want to add custom info for this particular Event Item
}: PropsWithChildren<Props>) {
  return (
    <div className={styles.container}>
      <h3>
        <a
          href="/dossier-programme_SLdB24.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dateLink}
        >
          {date} <span>{hour}</span>
        </a>
      </h3>
      {place && (
        <div className={styles.place}>
          <a
            href={getGoogleMapsUrl(place)}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.placeLink}
          >
            {place}
          </a>
        </div>
      )}
      <span className={styles.bookTitle}>{bookTitle}</span>
      <span className={styles.bookAuthor}>{bookAuthor}</span>
      <div className={styles.readerName}>{readerInfo}</div>
      <>{children}</>
    </div>
  );
}
