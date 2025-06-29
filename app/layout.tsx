import type { Metadata } from 'next';
import { Crimson_Text, EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: 'Littérature à Voix Haute | Festival de Lectures & Théâtre dans le Bessin',
  description:
    "Lectures de textes littéraires et représentations théâtrales dans le Bessin. Festival annuel depuis 2010 et participation au Off d'Avignon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${crimsonText.variable} ${ebGaramond.variable}`}>
        <div className="layout">
          <div className="spaceHeader"></div>
          <Header />
          {/* L'ensemble des contenus des pages est contenu entre les balises <main> */}
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
