import { Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../styles/Individualproject.module.css";

type ProjectpageprojectsProps = {
    projectImage: StaticImageData;
    projectGithubLink: string;
    projectLiveLink: string;
    projectName: string;
    projectTechStack: string;
    projectMotivation: string;
    projectDescription: string;
}

const Projectpageproject = ({projectImage, projectGithubLink, projectLiveLink, projectName, projectTechStack, projectMotivation, projectDescription}: ProjectpageprojectsProps) => {
  return (
    <div className={styles.projectpage_project}>
        <Image 
            className={styles.projectpage_project_image}
            src={projectImage}
            alt="Project Picture"
            width={450}
            height={325}
            quality={95}
        />
        <div>
        <a href={projectGithubLink}><Button className={styles.project_button} variant="contained" color="primary">Github</Button></a>
        {projectLiveLink != "" && <a href={projectLiveLink}><Button className={styles.project_button} variant="contained" color="primary">Live</Button></a>}
        </div>
        <div className={styles.projectpageproject_text}>
            <h2 className={inter.className}>{projectName}</h2>
            <h3 className={inter.className}>{projectTechStack}</h3>
            <h4 className={inter.className}>Motivation: {projectMotivation}</h4>
            <p className={inter.className}>Description: {projectDescription}</p>
        </div>
    </div>
  )
}

export default Projectpageproject