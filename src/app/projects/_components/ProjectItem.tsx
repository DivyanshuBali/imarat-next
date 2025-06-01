"use client";

import styles from "../page.module.css";

import React from "react";
import { motion } from "motion/react";
import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import Image from "next/image";
import Link from "next/link";

function ProjectItem(props: { project: PROJECT_KEYS }) {
  const { project } = props;

  return (
    <Link href={`/projects/${PROJECT_DATA[project].link}`}>
      <motion.div
        className={styles.projectItem}
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          className={styles.projectImage}
          variants={{
            initial: { filter: "grayscale(100%)" },
            hover: {
              filter: "none",
              transition: { duration: 0.4 },
            },
          }}
        >
          <Image
            src={PROJECT_DATA[project].images.thumbnail}
            alt={PROJECT_DATA[project].title}
            fill
          />
        </motion.div>

        <div style={{ textAlign: "center" }}>
          <motion.h5
            className={styles.projectTitle}
            variants={{
              initial: { opacity: 0, y: 10 },
              hover: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          >
            {PROJECT_DATA[project].title}
          </motion.h5>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 10 },
              hover: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
              },
            }}
          >
            {PROJECT_DATA[project].date} / {PROJECT_DATA[project].area} /{" "}
            {PROJECT_DATA[project].type}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectItem;
