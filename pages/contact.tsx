import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@mui/material";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/Contact.module.css";

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from "@mui/material/Box";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Head>
        <title>Geer Ma Portfolio Website - Contact</title>
        <meta name="description" content="Geer Ma Portfolio Website - Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.contact}>
        <div className={styles.center}>
          <h1 className={inter.className}>Contact</h1>
          <Box m={1}>
            <a href="mailto:`GeerGMa@gmail.com`?subject=Email Inquiry from Geer Ma's Portfolio Site&body="><Button variant="contained" endIcon={<MailIcon />}>Email</Button></a>
          </Box>
          <Box m={1}>
            <a target="_blank" href="https://github.com/geerma" rel="noopener noreferrer"><Button variant="contained" endIcon={<GitHubIcon />}>GitHub</Button></a>
          </Box>
          <Box m={1}>
            <a target="_blank" href="https://www.linkedin.com/in/geerma" rel="noopener noreferrer"><Button variant="contained" endIcon={<LinkedInIcon />}>LinkedIn</Button></a>
          </Box>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
