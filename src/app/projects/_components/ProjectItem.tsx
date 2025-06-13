import styles from "../page.module.css";
import React from "react";
import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import Image from "next/image";
import Link from "next/link";

function ProjectItem(props: { project: PROJECT_KEYS }) {
  const { project } = props;

  return (
    <Link href={`/projects/${PROJECT_DATA[project].link}`}>
      <div className={styles.projectItem}>
        <div className={styles.projectImage}>
          <div className={styles.imageContainer}>
            <Image
              src={PROJECT_DATA[project].images.thumbnails[0]}
              alt={PROJECT_DATA[project].title}
              fill
            />
          </div>
          <div className={styles.imageOverlay}>
            <Image
              src={PROJECT_DATA[project].images.thumbnails[1]}
              alt={PROJECT_DATA[project].title}
              fill
            />
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h5 className={styles.projectTitle}>{PROJECT_DATA[project].title}</h5>

          <p className={styles.projectDetails}>
            {PROJECT_DATA[project].date} / {PROJECT_DATA[project].area} /{" "}
            {PROJECT_DATA[project].type}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
