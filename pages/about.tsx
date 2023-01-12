import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/About.module.css";
import { Button } from "@mui/material";

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
      <main className={styles.about}>
        <div className={styles.center}>
          <h1 className={inter.className}>About Me</h1>
          <p className={inter.className}>
            Hello! My name is Geer Ma. I am pursuing a Master's in Software Engineering at the University
            of Calgary. I love learning new libraries and frameworks and
            applying those skills in personal projects or hackathons. I have
            taken the initiative to participate in eight hackathons in my free
            time and have received awards in five of them.
          </p>
          <p className={inter.className}>
            If you are interested in learning more, check out my resume and
            projects below!
          </p>
          <div className={styles.about_buttons}>
          <a
            target="_blank"
            href="https://geerma-portfolio-bucket.s3.us-west-1.amazonaws.com/geerma_resume_jan11.pdf"
            rel="noopener noreferrer"
          >
            <Button className={styles.about_button} variant="contained">Resume</Button>
          </a>
          <a href="/projects">
            <Button className={styles.about_button} variant="contained">Projects</Button>
          </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
