"use client";

import ImagesLayoutA from "./_components/LandingLayouts/ImagesLayoutA";
import ImagesLayoutB from "./_components/LandingLayouts/ImagesLayoutB";
import ImagesLayoutC from "./_components/LandingLayouts/ImagesLayoutC";
import ImagesLayoutD1 from "./_components/LandingLayouts/ImagesLayoutD1";
import ImagesLayoutD2 from "./_components/LandingLayouts/ImagesLayoutD2";

import styles from "./page.module.css";

import { ALL_PROJECT_IMAGES } from "@/app/_utils/constants";

export default function Home() {
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.column1}>
          <ImagesLayoutA
            images={[
              {
                src: ALL_PROJECT_IMAGES["EC01"].src,
                alt: ALL_PROJECT_IMAGES["EC01"].alt,
                link: ALL_PROJECT_IMAGES["EC01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["EC02"].src,
                alt: ALL_PROJECT_IMAGES["EC02"].alt,
                link: ALL_PROJECT_IMAGES["EC01"].link,
              },
            ]}
          />
          <ImagesLayoutD2
            image={{
              src: ALL_PROJECT_IMAGES["BTM_SKETCH02"].src,
              alt: ALL_PROJECT_IMAGES["BTM_SKETCH02"].alt,
              link: ALL_PROJECT_IMAGES["BTM_SKETCH02"].link,
            }}
          />
          <ImagesLayoutB
            images={[
              {
                src: ALL_PROJECT_IMAGES["BTM_SKETCH01"].src,
                alt: ALL_PROJECT_IMAGES["BTM_SKETCH01"].alt,
                link: ALL_PROJECT_IMAGES["BTM_SKETCH01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["IMO_01"].src,
                alt: ALL_PROJECT_IMAGES["IMO_01"].alt,
                link: ALL_PROJECT_IMAGES["IMO_01"].link,
              },
            ]}
          />
          <ImagesLayoutC
            images={[
              {
                src: ALL_PROJECT_IMAGES["NYH01"].src,
                alt: ALL_PROJECT_IMAGES["NYH01"].alt,
                link: ALL_PROJECT_IMAGES["NYH01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["NYH02"].src,
                alt: ALL_PROJECT_IMAGES["NYH02"].alt,
                link: ALL_PROJECT_IMAGES["NYH02"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["NYH_SKETCH01"].src,
                alt: ALL_PROJECT_IMAGES["NYH_SKETCH01"].alt,
                link: ALL_PROJECT_IMAGES["NYH_SKETCH01"].link,
              },
            ]}
          />
          <ImagesLayoutD1
            image={{
              src: ALL_PROJECT_IMAGES["IMO_01"].src,
              alt: ALL_PROJECT_IMAGES["IMO_01"].alt,
              link: ALL_PROJECT_IMAGES["IMO_01"].link,
            }}
          />
        </div>

        {/* Just a margin Container */}
        <div className={styles.column2} />
      </section>
    </>
  );
}
