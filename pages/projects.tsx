import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Projects.module.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";

function Projects() {
  return (
    <>
      <Head>
        <title>Geer Ma Portfolio Website - My Projects</title>
        <meta
          name="description"
          content="Geer Ma Portfolio Website - My Projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.projects}>
        <div className={styles.center}>
          <h1 className={inter.className}>My Projects</h1>
        </div>

        <div className={styles.projectgrid}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <h2>Project 1</h2>
            </Grid>
            <Grid xs={6}>
              <h2>Project 2</h2>
            </Grid>
            <Grid xs={6}>
              <h2>Project 3</h2>
            </Grid>
            <Grid xs={6}>
              <h2>Project 4</h2>
            </Grid>
          </Grid>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Projects;
