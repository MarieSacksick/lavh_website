import styles from './EventItem.module.css';

type Props = {
  date: string;
  hour: string;
  place: string;
  bookTitle: string;
  bookAuthor: string;
  readerInfo: string;
};

export default function EventItem({ date, place, bookTitle, bookAuthor, readerInfo, hour }: Props) {
  return (
    <div className={styles.container}>
      <h3>
        {date} <span>{hour}</span>
      </h3>
      <div className={styles.place}>{place}</div>
      <span className={styles.bookTitle}>{bookTitle}</span>
      <span className={styles.bookAuthor}>{bookAuthor}</span>
      <div className={styles.readerName}>{readerInfo}</div>
    </div>
  );
}
