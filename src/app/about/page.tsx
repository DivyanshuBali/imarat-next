import type { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";
import * as motion from "motion/react-client";
import AR_SK from "../../../public/assets/AR_SAVNEET_KAUR.jpeg";
import { getCldOgImageUrl } from "next-cloudinary";

const ogImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  width: 1200,
  height: 627,
  format: "jpg",
});

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ar. Savneet Kaur founded Imarat Architects in 1995 after graduating from Chandigarh College of Architecture. The studio is devoted to sustainability, research, and vernacular knowledge systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    title: "About Us | Imarat Architects",
    description:
      "Ar. Savneet Kaur founded Imarat Architects in 1995 after graduating from Chandigarh College of Architecture. The studio is devoted to sustainability, research, and vernacular knowledge systems.",
    siteName: "Imarat Architects",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 627,
        alt: "Imarat Architects — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Imarat Architects",
    description:
      "Ar. Savneet Kaur founded Imarat Architects in 1995 after graduating from Chandigarh College of Architecture. The studio is devoted to sustainability, research, and vernacular knowledge systems.",
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <article className={styles.aboutContent}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${styles.aboutContent} ${styles.hiddenScrollbar}`}
      >
        <div className={styles.photoWrapper}>
          <Image
            src={AR_SK}
            alt="Ar. Savneet Kaur, Principal Architect"
            className={styles.photo}
            priority
          />
        </div>
        <div className={styles.bio}>
          <p>
            Ar. Savneet Kaur founded{" "}
            <strong className={styles.bold}>IMARAT ARCHITECTS</strong> in 1995
            after graduating from Chandigarh College of Architecture (CCA). Over
            the next two decades, the firm completed over 250 built projects,
            primarily residences. With time, in the last 15 years, the practice
            has gradually shifted its focus towards sustainability and research.
          </p>
          <p>
            She now leads a small dedicated team working on a select number of
            projects each year, while also teaching as visiting faculty at CCA.
          </p>
          <p>
            Beyond the studio, she heads the{" "}
            <strong className={styles.bold}>
              Imarat Centre for Earth Architecture (ICEA)
            </strong>{" "}
            — a platform that supports and preserves vernacular knowledge
            systems by working closely with artisans and local craftsmen.
          </p>
        </div>
      </motion.div>
    </article>
  );
}
