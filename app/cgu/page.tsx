import styles from './page.module.css';

export default function CGU() {
  return (
    <div className={styles.container}>
      <h2>Conditions Générales d&apos;Utilisation</h2>

      <section className={styles.section}>
        <h2>1. Présentation du site</h2>
        <p>
          Le site Littérature à Voix Haute (ci-après &quot;le Site&quot;) est une plateforme dédiée
          à la promotion et l&apos;organisation d&apos;événements littéraires. Le site est édité par
          l&apos;association Littérature à Voix Haute.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du Site (textes, images, logos, etc.) est protégé par le droit
          d&apos;auteur. Toute reproduction ou représentation, totale ou partielle, du Site ou de
          l&apos;un de ses éléments, sans l&apos;autorisation expresse de Littérature à Voix Haute,
          est interdite.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Protection des données personnelles</h2>
        <p>
          {`Les informations collectées sur le Site sont utilisées uniquement dans le cadre des
          services proposés par Littérature à Voix Haute. Conformément à la loi "Informatique et
          Libertés" du 6 janvier 1978, vous disposez d&apos;un droit d&apos;accès, de modification et de
          suppression des données vous concernant.`}
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Liens hypertextes</h2>
        <p>
          Le Site peut contenir des liens vers d&apos;autres sites. Littérature à Voix Haute
          n&apos;est pas responsable du contenu des sites vers lesquels des liens sont établis.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Contact</h2>
        <p>
          Pour toute question concernant ces CGU, vous pouvez nous contacter à l&apos;adresse
          suivante :{' '}
          <a href="mailto:contact@litteratureavoixhaute.com">contact@litteratureavoixhaute.com</a>
        </p>
      </section>
    </div>
  );
}
