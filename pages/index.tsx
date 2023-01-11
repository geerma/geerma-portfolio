import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/Navbar/Navbar";
import { Button } from "@mui/material";

import profileImage from "../public/profile.jpg";

import activetechstyleImage from "../public/activetechstyle.jpg";
import Homepageproject from "../components/Homepageproject/Homepageproject";

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
            Master of Software Engineering
          </h2>
          <h2 className={inter.className}>
            Full-stack Developer
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

        <div>
          <Homepageproject 
           projectImage={activetechstyleImage}
           projectGithubLink="https://github.com/geerma/activetechstyle"
           projectLiveLink="https://main.d9qvddew27vgt.amplifyapp.com/"
           projectName="Active Tech Style"
           projectTechStack="React, Spring Boot, MySQL"
           projectMotivation="Course Project (Improvements made after - as a Personal Project)"
           projectDescription="Full-stack E-Commerce Application using React.js, Java, Spring, and MySQL. Deployed to AWS with Amplify, Elastic Beanstalk, RDS, ACM, and Route 53"
          />
          <br></br>
          <Homepageproject 
           projectImage={activetechstyleImage}
           projectGithubLink="https://github.com/geerma/activetechstyle"
           projectLiveLink="https://main.d9qvddew27vgt.amplifyapp.com/"
           projectName="The Giving Tree"
           projectTechStack="React, TypeScript, Express, ChatGPT-3 AI"
           projectMotivation="Hacky Winterland 2"
           projectDescription="Gift and event suggestion web application created using React, TypeScript, and ChatGPT3-AI. Server deployed to Google Cloud Run via Docker Container"
          />
        </div>
      </main>
    </>
  );
}
