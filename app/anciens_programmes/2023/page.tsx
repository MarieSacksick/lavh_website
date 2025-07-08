import Image from 'next/image';

export default function Programme2023() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <Image
        src="/anciens_programmes/Asnelles_site_2023.jpg"
        alt="Programme 2023"
        width={1050}
        height={1050}
        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: 8 }}
      />
    </main>
  );
}
