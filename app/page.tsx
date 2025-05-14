import styles from './page.module.css';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Littérature à voix haute - Bessin 2024</h1>
      </main>
      <footer className={styles.footer}>This is the footer</footer>
    </div>
  );
}
