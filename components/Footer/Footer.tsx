import React from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../styles/Navbar.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box my={1} className={styles.footer_email}>
        <a href="mailto:`GeerGMa@gmail.com`?subject=Email Inquiry from Geer Ma's Portfolio Site&body="><Button>geergma@gmail.com</Button></a>
      </Box>
      <Box my={1} className={styles.footer_icons}>
        <a target="_blank" href="https://www.linkedin.com/in/geerma" rel="noopener noreferrer"><Button startIcon={<LinkedInIcon />} /></a>
        <a target="_blank" href="https://github.com/geerma" rel="noopener noreferrer"><Button endIcon={<GitHubIcon />} /></a>
      </Box>
      <Box my={1} className={styles.footer_copyright}>
        <p className={inter.className}>
          Designed & Developed by Geer Ma.{" "}
          <a href="https://github.com/geerma/geerma-portfolio">Source Code</a>
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
