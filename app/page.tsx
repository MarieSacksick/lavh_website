import styles from './page.module.css';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div>qsdqsdsq</div>
      </main>
      <footer className={styles.footer}>This is the footer</footer>
    </div>
  );
}
