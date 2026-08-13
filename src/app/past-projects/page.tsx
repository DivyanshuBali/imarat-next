import type { Metadata } from "next";
import styles from "./page.module.css";
import { getCldOgImageUrl } from "next-cloudinary";
import pastProjectPhotos from "./data.json";
import PastProjectsMasonry from "./PastProjectsMasonry";

const PAST_PROJECT_PHOTOS = pastProjectPhotos.filter((photo) => photo.ok);

const ogImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  width: 1200,
  height: 627,
  format: "jpg",
});

export const metadata: Metadata = {
  title: "Past Projects",
  description:
    "A photo archive of past projects by Imarat Architects spanning three decades.",
  alternates: {
    canonical: "/past-projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/past-projects",
    title: "Past Projects | Imarat Architects",
    description:
      "A photo archive of past projects by Imarat Architects spanning three decades.",
    siteName: "Imarat Architects",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 627,
        alt: "Imarat Architects — Past Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Past Projects | Imarat Architects",
    description:
      "A photo archive of past projects by Imarat Architects spanning three decades.",
    images: [ogImage],
  },
};

export default function PastProjectsPage() {
  return (
    <section className={styles.pastProjectsPage}>
      <PastProjectsMasonry photos={PAST_PROJECT_PHOTOS} />
    </section>
  );
}
