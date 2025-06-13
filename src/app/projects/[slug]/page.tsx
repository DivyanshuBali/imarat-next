import styles from "./page.module.css";

import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollButton from "./_components/ScrollToContentButton";
import ImageCarousel from "../../_components/ImageCarousel/ImageCarousel";
import * as motion from "motion/react-client";

// This becomes a Server Component by default
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = PROJECT_DATA[slug as PROJECT_KEYS];

  // Handle case when project doesn't exist
  if (!projectData) {
    notFound();
  }

  return (
    <section>
      <div className={styles.projectPageHeader}>
        <div className={styles.projectPageHeaderImageAndTitle}>
          <motion.div
            className={styles.projectItem}
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className={styles.projectImage}
              variants={{
                initial: { opacity: 1 },
                hover: { opacity: 1 },
              }}
            >
              <motion.div
                style={{ position: "relative", width: "100%", height: "100%" }}
                variants={{
                  initial: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
              >
                <Image
                  src={projectData.images.thumbnails[0]}
                  alt={projectData.title}
                  fill
                />
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
              >
                <Image
                  src={projectData.images.thumbnails[1]}
                  alt={projectData.title}
                  fill
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <h3>{projectData.title}</h3>
        </div>

        <ScrollButton />
      </div>
      <div className={styles.projectContent} id="projectContent">
        {/* CONTENT COLUMN */}
        <div className={styles.sideColumn}>
          <h1 className={styles.projectTitle}>{projectData.title}</h1>

          <div className={styles.projectDetails}>
            {projectData.date && (
              <div className={styles.detailRow}>
                <span className={styles.detailValue}>{projectData.date}</span>
              </div>
            )}

            {projectData.type && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>TYPE </span>
                <span className={styles.detailValue}>{projectData.type}</span>
              </div>
            )}

            {projectData.location && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Location </span>
                <span className={styles.detailValue}>
                  {projectData.location}
                </span>
              </div>
            )}

            {projectData.area && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Area </span>
                <span className={styles.detailValue}>{projectData.area}</span>
              </div>
            )}

            {projectData.methodology && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Methodology </span>
                <span className={styles.detailValue}>
                  {projectData.methodology}
                </span>
              </div>
            )}

            {projectData.materials && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Materials </span>
                <span className={styles.detailValue}>
                  {projectData.materials}
                </span>
              </div>
            )}
          </div>

          {projectData.description && (
            <div className={styles.projectDescription}>
              <h4 className={styles.descriptionTitle}>NOTES</h4>
              <p>{projectData.description}</p>
            </div>
          )}
        </div>

        {/* IMAGES COLUMN */}
        <div className={styles.mainColumn}>
          <ImageCarousel images={projectData.images.pictures} />
          <ImageCarousel images={projectData.images.sketches} />
          <ImageCarousel images={projectData.images.drawings} />
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const projects = Object.values(PROJECT_KEYS);

  return projects.map((slug: string) => ({
    slug,
  }));
}
