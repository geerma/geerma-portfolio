import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/About.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";

import profileImage from "../assets/profile.jpg";
import { Languages } from "../components/Skills/Languages/Languages";

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
          <Grid container spacing={8}>
            <Grid lg={4} className={styles.skills_grid} paddingX={0}>
              <Languages />
            </Grid>
            <Grid lg={4} className={styles.skills_grid} paddingX={0}>
              <Box className={styles.skills_box}>
                <h2 className={inter.className}>Frameworks/Libraries</h2>
              </Box>
            </Grid>
            <Grid lg={4} className={styles.skills_grid} paddingX={0}>
              <Box className={styles.skills_box}>
                <h2 className={inter.className}>Tools</h2>
              </Box>
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
