import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../styles/Home.module.css";

type HomepageprojectsProps = {
  projectImage: StaticImageData;
  projectGithubLink: string;
  projectLiveLink: string;
  projectName: string;
  projectTechStack: string;
  projectMotivation: string;
  projectDescription: string;
};

const Homepageproject = ({
  projectImage,
  projectGithubLink,
  projectLiveLink,
  projectName,
  projectTechStack,
  projectMotivation,
  projectDescription,
}: HomepageprojectsProps) => {
  return (
    <div>
      <Grid container columnSpacing={0}>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
          <Image
            className={styles.project_picture}
            src={projectImage}
            alt="Profile Picture"
            width={500}
            height={350}
            quality={97}
            priority
          />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.project_text}>
            <h2 className={inter.className}>{projectName}</h2>
            <h3 className={inter.className}>{projectTechStack}</h3>
            <h4 className={inter.className}>Motivation: {projectMotivation}</h4>
            <p className={inter.className}>Description: {projectDescription}</p>
          </div>
          <div className={styles.project_buttons}>
            <Button className={styles.github_button} variant="contained">Github</Button>
            <Button className={styles.live_button} variant="contained">Live</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepageproject;
