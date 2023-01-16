import React from "react";

import Image from "next/image";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../../styles/About.module.css";

// Logo Imports
import amazonLogo from "../../../assets/skills/tools/amazon.svg";
import dockerLogo from "../../../assets/skills/tools/docker.svg";
import firebaseLogo from "../../../assets/skills/tools/firebase.svg";
import gcloudLogo from "../../../assets/skills/tools/gcloud.svg";
import gitLogo from "../../../assets/skills/tools/git.svg";
import mongodbLogo from "../../../assets/skills/tools/mongodb.svg";
import mysqlLogo from "../../../assets/skills/tools/mysql.svg";

export const Tools = () => {
  return (
    <Box className={styles.skills_box}>
      <h2 className={inter.className}>Tools</h2>
      <Box className={styles.tools_box}>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={gitLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>Git</h4>
            <Image
              src={mysqlLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>MySQL</h4>
            <Image
              src={dockerLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>Docker</h4>
          </Box>
        </Grid>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={amazonLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>AWS</h4>
            <Image
              src={mongodbLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>MongoDB</h4>
          </Box>
        </Grid>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={gcloudLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>GCP</h4>
            <Image
              src={firebaseLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>Firebase</h4>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
