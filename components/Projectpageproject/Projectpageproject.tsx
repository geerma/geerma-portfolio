import { Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "../../styles/Individualproject.module.css";
import { Box } from '@mui/system';

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
        <div className={styles.projectpageproject_buttons}>
        <Box mx={1}>
          <a href={projectGithubLink}><Button variant="contained" color="primary">Github</Button></a>
        </Box>
        {projectLiveLink != "" && <Box mx={1}><a href={projectLiveLink}><Button variant="contained" color="primary">Live</Button></a></Box>}
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