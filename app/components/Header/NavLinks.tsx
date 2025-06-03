'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

type NavLinksProps = {
  linkClassName?: string;
  activeLinkClassName?: string;
};

export const SLDB_CONTENTS = [
  { title: 'Session 2024', href: '/' },
  { title: 'Session 2023', href: '/' },
  { title: 'Session 2022', href: '/' },
  { title: 'Session 2021', href: '/' },
  { title: 'Session 2020', href: '/' },
  { title: 'Session 2019', href: '/' },
] as const;

export default function NavLinks({ linkClassName = '', activeLinkClassName = '' }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" className={pathname === '/' ? activeLinkClassName : linkClassName}>
        Accueil
      </Link>
      <DropDownMenu
        triggerTitle="Soirées Littéraires du Bessin"
        contents={[SLDB_CONTENTS[0], ...SLDB_CONTENTS.slice(1)]}
      />
      <Link
        href="/comediens"
        className={pathname === '/comediens' ? activeLinkClassName : linkClassName}
      >
        Comédiens
      </Link>
      <Link
        href={'https://www.litteratureavoixhaute.com/Bessin_audio.html'}
        className={pathname === '/Bessin_audio.html' ? activeLinkClassName : linkClassName}
      >
        Extraits Audio
      </Link>
    </>
  );
}
