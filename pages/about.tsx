import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import styles from "../styles/Home.module.css";

function About() {
  return (
    <>
      <Head>
        <title>Geer Ma Portfolio Website - About</title>
        <meta name="description" content="Geer Ma Portfolio Website - About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>About Me</h1>
        </div>
      </main>
    </>
  );
}

export default About;
