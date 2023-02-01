import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import { Button } from "@mui/material";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/Home.module.css";

import Homepageproject from "../components/Homepageproject/Homepageproject";

import profileImage from "../assets/profile.jpg";
import activetechstyleImage from "../assets/ActiveTechStyle.jpg";
import thegivingtreeImage from "../assets/TheGivingTree.png";
import volunteervisionImage from "../assets/VolunteerVision.png";
import { Box } from "@mui/system";

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
      <main className={styles.home}>
        <div className={styles.profile_section}>
          <div className={styles.center}>
            <h1 className={inter.className}>Geer Ma</h1>
            <br></br>
            <h2 className={inter.className}>
              Software Engineering MEng Student
            </h2>
            <h2 className={inter.className}>Full-stack Developer</h2>
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
            <a
              target="_blank"
              href="https://geerma-portfolio-bucket.s3.us-west-1.amazonaws.com/geerma_resume_jan31.pdf"
              rel="noopener noreferrer"
            >
              <Button className={styles.resume_button} variant="contained">
                Resume
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.featuredprojects_section}>
          <div className={styles.center}>
            <h4 className={inter.className}>Featured Projects</h4>
          </div>
          <Homepageproject
            projectImage={activetechstyleImage}
            projectGithubLink="https://github.com/geerma/activetechstyle"
            projectLiveLink="https://main.d9qvddew27vgt.amplifyapp.com/"
            projectName="Active Tech Style"
            projectTechStack="React, Spring Boot, MySQL, AWS"
            projectMotivation="Course Project (Improvements made after - as a Personal Project)"
            projectDescription="Full-stack E-Commerce Application using React.js, Java, Spring, and MySQL. Deployed to AWS with Amplify, Elastic Beanstalk, RDS, ACM, and Route 53"
          />
          <br></br>
          <Homepageproject
            projectImage={volunteervisionImage}
            projectGithubLink="https://github.com/geerma/volunteer-vision"
            projectLiveLink="https://kazitasin07.wixsite.com/volunteer-vision/"
            projectName="Volunteer Vision"
            projectTechStack="React, Supabase, Auth0, Twilio, Wix"
            projectMotivation="CivicHacks [🥇 1st Place]"
            projectDescription="A platform that connects volunteers with local non-profit organizations. Contains a Wix landing page, leading to a Next.js web application"
          />
          <br></br>
          <Homepageproject
            projectImage={thegivingtreeImage}
            projectGithubLink="https://github.com/geerma/thegivingtree"
            projectLiveLink="https://www.thegivingtree.tech/"
            projectName="The Giving Tree"
            projectTechStack="React, TypeScript, Express, ChatGPT-3 AI"
            projectMotivation="Hacky Winterland 2 [🏅 Best Holiday Design]"
            projectDescription="Gift and event suggestion web application created using React, TypeScript, and ChatGPT3-AI. Server deployed to Google Cloud Run via a Docker image on Google Container Registry"
          />
        </div>
        <Box className={styles.learn_more}>
          <h2 className={inter.className}>To Learn More</h2>
          <Box className={styles.action_buttons}>
            <a href="/about">
              <Box m={1}>
                <Button size="medium" variant="contained">About Me</Button>
              </Box>
            </a>
            <a href="/projects">
              <Box m={1}>
                <Button size="medium" variant="contained">Other Projects</Button>
              </Box>
            </a>
            <a href="/contact">
              <Box m={1}>
                <Button size="medium" variant="contained">Contact Me</Button>
              </Box>
            </a>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
