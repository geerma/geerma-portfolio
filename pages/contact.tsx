import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@mui/material";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../styles/Contact.module.css";

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          <a href="mailto:`GeerGMa@gmail.com`?subject=Email Inquiry from Geer Ma's Portfolio Site&body="><Button className={styles.contact_button} variant="contained" endIcon={<MailIcon />}>Email</Button></a>
          <Button className={styles.contact_button} variant="contained" endIcon={<GitHubIcon />}>GitHub</Button>
          <Button className={styles.contact_button} variant="contained" endIcon={<LinkedInIcon />}>LinkedIn</Button>
        </div>
      </main>
    </>
  );
}

export default Contact;
