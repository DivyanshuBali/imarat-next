import styles from "./page.module.css";

import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import { notFound } from "next/navigation";
import ScrollButton from "./_components/ScrollToContentButton";
import ImageCarousel from "../../_components/ImageCarousel/ImageCarousel";
import NextImageWrapper from "@/app/_components/NextImageWrapper/NextImageWrapper";

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
          <div className={styles.projectItem}>
            <div className={styles.projectImage}>
              <div className={styles.imageContainer}>
                <NextImageWrapper
                  src={projectData.images.thumbnails[0]}
                  alt={projectData.title}
                  height={450}
                  width={300}
                />
              </div>
              <div className={styles.imageOverlay}>
                <NextImageWrapper
                  src={projectData.images.thumbnails[1]}
                  alt={projectData.title}
                  height={450}
                  width={300}
                />
              </div>
            </div>
          </div>
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
              {projectData.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
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
