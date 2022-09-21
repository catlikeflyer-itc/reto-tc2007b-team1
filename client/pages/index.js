import Head from "next/head";
import Image from "next/image";
import data from "../data/staticData.json";
import Hero from "../components/sections/hero/hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AO Docs Manager</title>
        <meta name="description" content="By Team 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero data={data.hero} />
      </main>
    </div>
  );
}
