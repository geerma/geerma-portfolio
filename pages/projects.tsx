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
import portfolioImage from "../assets/Portfolio.png"
import leftoversmarketplaceImage from "../assets/LeftoversMarketplace.png";
import thegivingtreeImage from "../assets/TheGivingTree.png";
import Footer from "../components/Footer/Footer";

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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={portfolioImage}
                  projectGithubLink="https://github.com/geerma/geerma-portfolio"
                  projectLiveLink="https://http://geergma.com"
                  projectName="Portfolio"
                  projectTechStack="React, Next.js, TypeScript, MaterialUI"
                  projectMotivation="Personal Project"
                  projectDescription="The portfolio page that you are currently looking at, which was from scratch without a downloaded template. Tech stack includes React, Next.js, TypeScript, and MaterialUI"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
              <Grid xs={12} sm={12} md={12} lg={6} className={styles.gridcomponent}>
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
      </main>
      <Footer />
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

