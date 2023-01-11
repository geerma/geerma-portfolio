import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/Navbar/Navbar";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Projectpageproject from "../components/Projectpageproject/Projectpageproject";

import activetechstyleImage from "../public/activetechstyle.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <link rel="icon" href="/favicon.ico" />
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
                  projectDescription="Full-stack E-Commerce Application using React.js, Java, Spring, and MySQL. Deployed to AWS with Amplify, Elastic Beanstalk, RDS, ACM, and Route 53"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/"
                  projectLiveLink="https://github.com/geerma/"
                  projectName="Cohere Camping Creator"
                  projectTechStack="React, Express, NLP Cohere API"
                  projectDescription="Description"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/"
                  projectLiveLink="https://github.com/geerma/"
                  projectName="Leftovers Marketplace"
                  projectTechStack="React, Express, MongoDB"
                  projectDescription="Description"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/"
                  projectLiveLink="https://github.com/geerma/"
                  projectName="The Giving Tree"
                  projectTechStack="React, TypeScript, Express"
                  projectDescription="Description"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/"
                  projectLiveLink="https://github.com/geerma/"
                  projectName="Gambling Go Away"
                  projectTechStack="React, Firebase"
                  projectDescription="Description"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/activetechstyle"
                  projectLiveLink="https://main.d9qvddew27vgt.amplifyapp.com/"
                  projectName="ML-MBTI-Webapp"
                  projectTechStack="React, Spring Boot, MySQL"
                  projectDescription="Full-stack E-Commerce Application using React.js, Java, Spring, and MySQL. Deployed to AWS with Amplify, Elastic Beanstalk, RDS, ACM, and Route 53"
                />
              </Grid>
              <Grid md={12} lg={6} className={styles.gridcomponent}>
                <Projectpageproject
                  projectImage={activetechstyleImage}
                  projectGithubLink="https://github.com/geerma/"
                  projectLiveLink="https://github.com/geerma/"
                  projectName="Blue Sky"
                  projectTechStack="Microsoft Azure Computer Vision and Speech Recognition, Python"
                  projectDescription="Description"
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

