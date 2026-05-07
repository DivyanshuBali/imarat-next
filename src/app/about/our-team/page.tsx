import type { Metadata } from "next";
import styles from "./page.module.css";
import { getCldOgImageUrl } from "next-cloudinary";

const ogImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  width: 1200,
  height: 627,
  format: "jpg",
});

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the architects, researchers, designers and interns who make up the Imarat Architects studio.",
  alternates: {
    canonical: "/about/our-team",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about/our-team",
    title: "Our Team | Imarat Architects",
    description:
      "Meet the architects, researchers, designers and interns who make up the Imarat Architects studio.",
    siteName: "Imarat Architects",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 627,
        alt: "Imarat Architects — Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Imarat Architects",
    description:
      "Meet the architects, researchers, designers and interns who make up the Imarat Architects studio.",
    images: [ogImage],
  },
};

type TeamGroup = {
  heading: string;
  members: string[];
};

const TEAM: TeamGroup[] = [
  {
    heading: "ARCHITECTS",
    members: [
      "PRINCIPAL ARCHITECT — AR. SAVNEET KAUR",
      "AR. MANNAT SINGH",
      "AR. NEHA DAHIYA",
    ],
  },
  {
    heading: "RESEARCH TEAM",
    members: ["MANNAT", "MANAN", "IVA", "DARRELL ANSHPREET"],
  },
  {
    heading: "INTERIOR DESIGNER",
    members: ["NOOR"],
  },
  {
    heading: "INTERN",
    members: ["SUBHRA"],
  },
];

export default function OurTeamPage() {
  return (
    <article className={styles.teamContent}>
      {TEAM.map((group) => (
        <section key={group.heading} className={styles.teamGroup}>
          <h2 className={styles.groupHeading}>{group.heading}</h2>
          <ol className={styles.memberList}>
            {group.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ol>
        </section>
      ))}
    </article>
  );
}
