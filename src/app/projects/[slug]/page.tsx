import styles from "./page.module.css";

import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import { notFound } from "next/navigation";
import MasonryLayout from "./_components/MasonryLayout";
import HeroSectionGallery from "./_components/HeroSectionGallery";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// This becomes a Server Component by default
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectData = PROJECT_DATA[slug as PROJECT_KEYS];

  // Handle case when project doesn't exist
  if (!projectData) {
    notFound();
  }

  function ProjectTextContent() {
    return (
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
              <span className={styles.detailValue}>{projectData.location}</span>
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
    );
  }

  const PROJECT_IMAGES = [
    ...projectData.images.pictures,
    ...projectData.images.sketches,
  ];

  return (
    <section>
      {/* PROJECT PAGE HERO SECTION */}
      <HeroSectionGallery projectData={projectData} />

      <div className={styles.projectContent} id="projectContent">
        <MasonryLayout
          projectDescription={<ProjectTextContent />}
          images={PROJECT_IMAGES}
        />
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projectData = PROJECT_DATA[slug as PROJECT_KEYS];

  return {
    title: projectData.title,
    description: projectData.description,
    openGraph: {
      title: projectData.title,
      description: projectData.description,
      url: `https://imaratarchitects.com/projects/${slug}`,
      siteName: "Imarat Architects",
      images: [
        {
          url: projectData.images.thumbnails[0], // Must be an absolute URL
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
