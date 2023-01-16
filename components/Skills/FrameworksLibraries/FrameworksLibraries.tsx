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
      <Box className={styles.languages_box}>
        <Grid lg={4} paddingX={0}>
          <Box className={styles.individual_item}>
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
        <Grid lg={4} paddingX={0}>
          <Box className={styles.individual_item}>
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
        <Grid lg={4} paddingX={0}>
          <Box className={styles.individual_item}>
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
