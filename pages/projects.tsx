import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/Projects.module.css";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Projectpageproject from "../components/Projectpageproject/Projectpageproject";

import activetechstyleImage from "../assets/ActiveTechStyle.jpg";
import blueskyImage from "../assets/BlueSky.png";
import coherecampingcreatorImage from "../assets/CohereCampingCreator.png";
import gamblegoawayImage from "../assets/GambleGoAway.png";
import mlmbtiwebappImage from "../assets/MLMbtiWebapp.png"
import leftoversmarketplaceImage from "../assets/LeftoversMarketplace.png";
import thegivingtreeImage from "../assets/TheGivingTree.png";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
});

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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.projects}>
        <div className={styles.center}>
          <h1 className={inter.className}>My Projects</h1>
        </div>

        <div className={styles.projectgrid}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/activetechstyle"
                  projectLiveLink="https://main.d9qvddew27vgt.amplifyapp.com/"
                  projectName="Active Tech Style"
                  projectTechStack="React, Spring Boot, MySQL"
                  projectMotivation="Architecture and Database Course Project (Improvements made after as a Personal Project)"
                  projectDescription="Full-stack E-Commerce Application using React.js, Java, Spring, and MySQL. Deployed to AWS with Amplify, Elastic Beanstalk, RDS, ACM, and Route 53"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={thegivingtreeImage}
                  projectGithubLink="https://github.com/geerma/thegivingtree"
                  projectLiveLink="https://www.thegivingtree.tech/"
                  projectName="The Giving Tree"
                  projectTechStack="React, TypeScript, Express, OpenAI ChatGPT-3"
                  projectMotivation="Hackathon - Hacky Winterland 2"
                  projectDescription="Project utilizes OpenAI ChatGPT-3 to suggest gift and event ideas. Built with React and Express, then deployed via Google Cloud Run"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={leftoversmarketplaceImage}
                  projectGithubLink="https://github.com/geerma/leftoversmarketplace"
                  projectLiveLink="https://www.leftoversmarketplace.tech/"
                  projectName="Leftovers Marketplace"
                  projectTechStack="React, Express, MongoDB"
                  projectMotivation="Hackathon - Wafflehacks 2022"
                  projectDescription="Full-stack web application to help fight food insecurity. Built using React, Express, and MongoDB"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={coherecampingcreatorImage}
                  projectGithubLink="https://github.com/geerma/CohereCampingCreator"
                  projectLiveLink="https://www.coherecampingcreator.tech/"
                  projectName="Cohere Camping Creator"
                  projectTechStack="React, Express, NLP Cohere AI"
                  projectMotivation="Hackathon - FreyHacks & SimpliHacks 2022"
                  projectDescription="Project using NLP Cohere AI to generate scary stories and questions to spark camping trip conversations"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={gamblegoawayImage}
                  projectGithubLink="https://github.com/geerma/GamblingGoAway"
                  projectLiveLink="https://gambling-go-away.vercel.app/"
                  projectName="Gambling Go Away"
                  projectTechStack="React, Firebase"
                  projectMotivation="Hackathon - LaunchHacks 2022"
                  projectDescription="Web application created using React and Firebase to aid users in overcoming gambling addictions"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={mlmbtiwebappImage}
                  projectGithubLink="https://github.com/geerma/ml-mbti-webapp"
                  projectLiveLink=""
                  projectName="ML-MBTI-Webapp"
                  projectTechStack="React, Scikit-learn, Flask"
                  projectMotivation="Machine Learning Course Project"
                  projectDescription="An MBTI prediction machine learning web app created using Scikit-learn, Flask, and React"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={blueskyImage}
                  projectGithubLink="https://github.com/geerma/AzureCloud-OCR-SR"
                  projectLiveLink=""
                  projectName="Blue Sky"
                  projectTechStack="Python, Microsoft Azure OCR and Speech Recognition"
                  projectMotivation="Hackathon - ShellHacks 2022"
                  projectDescription="PySimpleGUI application using Microsoft Azure Computer Vision and Speech Recognition"
                />
              </Grid>
            </Grid>
          </ThemeProvider>
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

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export default Projects;

