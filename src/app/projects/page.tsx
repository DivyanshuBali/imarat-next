import styles from "./page.module.css";

import React from "react";

import { PROJECT_KEYS } from "../_utils/constants";
import ProjectItem from "./_components/ProjectItem";

function ProjectsPage() {
  return (
    <section className={styles.projectsPage}>
      {Object.values(PROJECT_KEYS).map((project) => (
        <ProjectItem key={project} project={project} />
      ))}
    </section>
  );
}

export default ProjectsPage;
