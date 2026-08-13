import styles from "./page.module.css";

import React from "react";
import Link from "next/link";

import { PROJECT_KEYS } from "../_utils/constants";
import ProjectItem from "./_components/ProjectItem";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function ProjectsPage() {
  return (
    <section className={styles.projectsPage}>
      {Object.values(PROJECT_KEYS).map((project) => (
        <ProjectItem key={project} project={project} />
      ))}

      <div className={styles.projectsStickyFooter}>
        <Link href="/about/works" className={styles.viewAllButton}>
          VIEW PAST PROJECTS
          <ArrowRightIcon className={styles.viewAllArrow} aria-hidden />
        </Link>
      </div>
    </section>
  );
}

export default ProjectsPage;
