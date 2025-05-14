import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Littérature à Voix Haute | Festival de Lectures & Théâtre dans le Bessin',
  description:
    "Découvrez les événements littéraires d'AVH : lectures et représentations théâtrales dans le Bessin. Festival annuel depuis 2010 et participation au Off d'Avignon. Vivez la littérature autrement !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={libreBaskerville.variable}>{children}</body>
    </html>
  );
}
