import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image, { StaticImageData } from "next/image";
import React from "react";

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
            width={400}
            height={400}
            quality={97}
            priority
          />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.project_text}>
            <h2>{projectName}</h2>
            <h3>{projectTechStack}</h3>
            <h4>Motivation: {projectMotivation}</h4>
            <p>{projectDescription}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepageproject;
