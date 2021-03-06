import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/SponsorsPage.module.scss";
import sponsors from "@/data/sponsors";

const Sponsors = () => (
  <>
    <Head>
      <title>Sponsors | AArch64.com</title>
    </Head>
    <Header />
    <main className={styles.sponsorSection}>
      <h1>Our Sponsors</h1>
      <div className={styles.list}>
        {sponsors.map((sponsor) => (
          <div className={styles.sponsor} id={sponsor.id} key={sponsor.id}>
            <div className={styles.logo}>
              <img
                src={require(`../public/sponsors/${sponsor.img}`)}
                alt={`${sponsor.name} Logo`}
                className={styles[`${sponsor.id}`]}
              />
            </div>
            <div className={styles.info}>
              <a href={sponsor.link} target="_blank" rel="noreferrer noopener">
                <h2>{sponsor.name}</h2>
              </a>
              <p>{sponsor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Sponsors;
