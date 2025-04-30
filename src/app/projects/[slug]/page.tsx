import stylesLocal from "./page.module.css";

import * as motion from "motion/react-client";
import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import { notFound } from "next/navigation";
import ImageCarousel from "../_components/ImageCarousel/ImageCarousel";

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
      <div>
        <div className={stylesLocal.projectContainer}>
          {/* IMAGES COLUMN */}

          <div className={stylesLocal.mainColumn}>
            <ImageCarousel images={projectData.images.pictures} />
            <ImageCarousel images={projectData.images.sketches} />
            <ImageCarousel images={projectData.images.drawings} />
          </div>

          {/* CONTENT COLUMN */}
          <motion.div
            className={stylesLocal.sideColumn}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className={stylesLocal.projectTitle}>{projectData.title}</h1>

            <div className={stylesLocal.projectDetails}>
              {projectData.date && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailValue}>
                    {projectData.date}
                  </span>
                </div>
              )}

              {projectData.type && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailLabel}>TYPE </span>
                  <span className={stylesLocal.detailValue}>
                    {projectData.type}
                  </span>
                </div>
              )}

              {projectData.location && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailLabel}>Location </span>
                  <span className={stylesLocal.detailValue}>
                    {projectData.location}
                  </span>
                </div>
              )}

              {projectData.area && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailLabel}>Area </span>
                  <span className={stylesLocal.detailValue}>
                    {projectData.area}
                  </span>
                </div>
              )}

              {projectData.methodology && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailLabel}>Methodology </span>
                  <span className={stylesLocal.detailValue}>
                    {projectData.methodology}
                  </span>
                </div>
              )}

              {projectData.materials && (
                <div className={stylesLocal.detailRow}>
                  <span className={stylesLocal.detailLabel}>Materials </span>
                  <span className={stylesLocal.detailValue}>
                    {projectData.materials}
                  </span>
                </div>
              )}
            </div>

            {projectData.description && (
              <div className={stylesLocal.projectDescription}>
                <h4 className={stylesLocal.descriptionTitle}>NOTES</h4>
                <p>{projectData.description}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export async function generateStaticParams() {
  const projects = Object.values(PROJECT_KEYS);

  return projects.map((slug: string) => ({
    slug,
  }));
}
