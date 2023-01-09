import { Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import styles from "../../styles/Individualproject.module.css";

type ProjectpageprojectsProps = {
    projectImage: StaticImageData;
    projectGithubLink: string;
    projectLiveLink: string;
    projectName: string;
    projectTechStack: string;
    projectDescription: string;
}

const Projectpageproject = ({projectImage, projectGithubLink, projectLiveLink, projectName, projectTechStack, projectDescription}: ProjectpageprojectsProps) => {
  return (
    <div className={styles.projectpage_project}>
        <Image 
            className={styles.projectpage_project_image}
            src={projectImage}
            alt="Project Picture"
            width={450}
            height={300}
            quality={95}
        />
        <div>
        <a href={projectGithubLink}><Button className={styles.project_button} variant="contained" color="primary">Github</Button></a>
        <a href={projectLiveLink}><Button className={styles.project_button} variant="contained" color="primary">Live</Button></a>
        </div>
        <h2>{projectName}</h2>
        <h3>{projectTechStack}</h3>
        <p>{projectDescription}</p>
    </div>
  )
}

export default Projectpageproject