import React from "react";

import Image from "next/image";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../../styles/About.module.css";

// Logo Imports
import cplusplusLogo from "../../../assets/skills/languages/c++.svg"
import cssLogo from "../../../assets/skills/languages/css.svg"
import htmlLogo from "../../../assets/skills/languages/html.svg"
import javaLogo from "../../../assets/skills/languages/java.svg"
import javascriptLogo from "../../../assets/skills/languages/javascript.svg"
import phpLogo from "../../../assets/skills/languages/php.png"
import pythonLogo from "../../../assets/skills/languages/python.svg"
import typescriptLogo from "../../../assets/skills/languages/typescript.svg"

export const Languages = () => {
  return (
    <Box className={styles.skills_box}>
    <h2 className={inter.className}>Languages</h2>
    <Box className={styles.languages_box}>
      <Grid lg={4} paddingX={0}>
        <Box className={styles.individual_item}>
          <Image
            src={typescriptLogo}
            alt="Profile Picture"
            width={80}
            height={80}
            quality={80}
            priority
          />
          <h4 className={inter.className}>TypeScript</h4>
          <Image
            src={pythonLogo}
            alt="Profile Picture"
            width={80}
            height={80}
            quality={80}
            priority
          />
          <h4 className={inter.className}>Python</h4>
          <Image
            src={cssLogo}
            alt="Profile Picture"
            width={80}
            height={80}
            quality={80}
            priority
          />
          <h4 className={inter.className}>CSS</h4>
        </Box>
      </Grid>
      <Grid lg={4} paddingX={0}>
        <Image
          src={javascriptLogo}
          alt="Profile Picture"
          width={80}
          height={80}
          quality={97}
          priority
        />
        <h4 className={inter.className}>JavaScript</h4>
        <Image
            src={cplusplusLogo}
            alt="Profile Picture"
            width={80}
            height={80}
            quality={80}
            priority
          />
          <h4 className={inter.className}>C++</h4>
      </Grid>
      <Grid lg={4} paddingX={0}>
        <Image
          src={javaLogo}
          alt="Profile Picture"
          width={80}
          height={80}
          quality={97}
          priority
        />
        <h4 className={inter.className}>Java</h4>
        <Image
            src={htmlLogo}
            alt="Profile Picture"
            width={80}
            height={80}
            quality={80}
            priority
          />
          <h4 className={inter.className}>HTML</h4>
      </Grid>
    </Box>
  </Box>
  );
};
