import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { Button } from "@mui/material";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/Home.module.css";

import Homepageproject from "../components/Homepageproject/Homepageproject";

import profileImage from "../assets/profile.jpg";
import activetechstyleImage from "../assets/ActiveTechStyle.jpg";
import thegivingtreeImage from "../assets/TheGivingTree.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Geer Ma Portfolio Website</title>
        <meta name="description" content="Geer Ma Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.profile_section}>
          <div className={styles.center}>
            <h1 className={inter.className}>Hello! I'm Geer Ma</h1>
            <br></br>
            <h2 className={inter.className}>
              Software Engineering MEng Student
            </h2>
            <h2 className={inter.className}>
              Full-stack Developer
            </h2>
            <br></br>
            <Image
              className={styles.profile}
              src={profileImage}
              alt="Profile Picture"
              width={180}
              height={180}
              quality={97}
              priority
            />
            <a target="_blank" href="https://geerma-portfolio-bucket.s3.us-west-1.amazonaws.com/geerma_resume_jan11.pdf" rel="noopener noreferrer">
            <Button className={styles.resume_button}
              variant="contained"
            >
              Resume
            </Button>
            </a>
          </div>
        </div>

        <div className={styles.featuredprojects_section}>
          <div className={styles.center}>
            <h4 className={inter.className}>
              Featured Projects
            </h4>
          </div>  
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
           projectImage={thegivingtreeImage}
           projectGithubLink="https://github.com/geerma/thegivingtree"
           projectLiveLink="https://www.thegivingtree.tech/"
           projectName="The Giving Tree"
           projectTechStack="React, TypeScript, Express, ChatGPT-3 AI"
           projectMotivation="Hackathon - Hacky Winterland 2"
           projectDescription="Gift and event suggestion web application created using React, TypeScript, and ChatGPT3-AI. Server deployed to Google Cloud Run via a Docker image on Google Container Registry"
          />
        </div>
      </main>
    </>
  );
}
