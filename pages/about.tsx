import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/About.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { Languages } from "../components/Skills/Languages/Languages";
import { FrameworksLibraries } from "../components/Skills/FrameworksLibraries/FrameworksLibraries";
import { Tools } from "../components/Skills/Tools/Tools";

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
            My name is Geer Ma and I am pursuing a Master's in Software
            Engineering at the University of Calgary. I love learning new
            libraries and frameworks, then applying those skills in personal
            projects or hackathons. I have taken the initiative to participate
            in eight hackathons in my free time and have received awards in five
            of them.
          </p>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={12} lg={4} xl={4} className={styles.skills_grid} paddingX={0}>
              <Languages />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4} className={styles.skills_grid} paddingX={0}>
              <FrameworksLibraries />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4} className={styles.skills_grid} paddingX={0}>
              <Tools />
            </Grid>
          </Grid>
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
              <Box m={1}>
                <Button variant="contained">Resume</Button>
              </Box>
            </a>
            <a href="/projects">
              <Box m={1}>
                <Button variant="contained">Projects</Button>
              </Box>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
