import Image from 'next/image'
import React from 'react'

import styles from "../../styles/Individualproject.module.css";

type ProjectpageprojectsProps = {
    projectName: string;
    projectDescription: string;
}

const Projectpageproject = ({projectName, projectDescription}: ProjectpageprojectsProps) => {
  return (
    <div className={styles.projectpage_project}>
        <Image 
            className={styles.projectpage_project_image}
            src="next.svg"
            alt="Project Picture"
            width={400}
            height={500}
            quality={95}
        />
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
    </div>
  )
}

export default Projectpageproject