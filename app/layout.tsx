import type { Metadata } from 'next';
import { Libre_Baskerville, STIX_Two_Text } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville',
});

const baskervald = localFont({
  src: './fonts/BaskervaldADFStd.otf',
  variable: '--font-baskervald',
});

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-stix-two-text',
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
      <body className={`${libreBaskerville.variable} ${stixTwoText.variable} ${baskervald.variable}`}>
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
