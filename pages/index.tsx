import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/Navbar/Navbar";
import { Button } from "@mui/material";

import profileImage from "../public/profile.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Geer Ma Portfolio Website</title>
        <meta name="description" content="Geer Ma Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Hello! I'm Geer Ma</h1>
          <br></br>
          <h2 className={inter.className}>
            Master of Software Engineering | Full-stack Developer
          </h2>
          <br></br>
          <p className={inter.className}>
            I am a passionate software developer
          </p>
          <Image
            className={styles.profile}
            src={profileImage}
            alt="Profile Picture"
            width={180}
            height={180}
            quality={97}
            priority
          />
          <Button
            variant="contained"
            onClick={() => {
              alert("Clicked");
            }}
          >
            Resume
          </Button>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Project 1"
              width={180}
              height={80}
              priority
            />
            <h2 className={inter.className}>
              Project 1 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Project 1.&nbsp;
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Project 2"
              width={180}
              height={80}
              priority
            />
            <h2 className={inter.className}>
              Project 2 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Project&nbsp;2!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Project 3"
              width={180}
              height={80}
              priority
            />
            <h2 className={inter.className}>
              Project 3 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover Project&nbsp;3.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Project 4"
              width={180}
              height={80}
              priority
            />
            <h2 className={inter.className}>
              Project 4 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Project&nbsp;4.</p>
          </a>
        </div>
      </main>
    </>
  );
}
