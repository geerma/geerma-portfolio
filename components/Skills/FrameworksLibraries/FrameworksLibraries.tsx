import React from "react";

import Image from "next/image";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../../styles/About.module.css";

// Logo Imports
import flaskLogo from "../../../assets/skills/frameworks/flask.svg";
import nodejsLogo from "../../../assets/skills/frameworks/nodejs.svg";
import reactLogo from "../../../assets/skills/frameworks/react.svg";
import springLogo from "../../../assets/skills/frameworks/spring.svg";

export const FrameworksLibraries = () => {
  return (
    <Box className={styles.skills_box}>
      <h2 className={inter.className}>Frameworks</h2>
      <Box className={styles.frameworks_box}>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={reactLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>React</h4>
            <Image
              src={flaskLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>Python</h4>
          </Box>
        </Grid>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={nodejsLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>node.js</h4>
          </Box>
        </Grid>
        <Grid xs={4} sm={4} md={4} lg={4} xl={4} paddingX={0}>
          <Box className={styles.individual_column}>
            <Image
              src={springLogo}
              alt="Profile Picture"
              width={80}
              height={80}
              quality={75}
              priority
            />
            <h4 className={inter.className}>Spring Boot</h4>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
