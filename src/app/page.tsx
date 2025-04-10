"use client";

import ImagesLayoutA from "./_components/LandingLayouts/ImagesLayoutA";
import ImagesLayoutB from "./_components/LandingLayouts/ImagesLayoutB";
import ImagesLayoutC from "./_components/LandingLayouts/ImagesLayoutC";
import ImagesLayoutD1 from "./_components/LandingLayouts/ImagesLayoutD1";
import ImagesLayoutD2 from "./_components/LandingLayouts/ImagesLayoutD2";
import ImagesLayoutF from "./_components/LandingLayouts/ImagesLayoutF";

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
                src: ALL_PROJECT_IMAGES["IEC_01"].src,
                alt: ALL_PROJECT_IMAGES["IEC_01"].alt,
                link: ALL_PROJECT_IMAGES["IEC_01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["IEC_02"].src,
                alt: ALL_PROJECT_IMAGES["IEC_02"].alt,
                link: ALL_PROJECT_IMAGES["IEC_01"].link,
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
                src: ALL_PROJECT_IMAGES["NYH03"].src,
                alt: ALL_PROJECT_IMAGES["NYH03"].alt,
                link: ALL_PROJECT_IMAGES["NYH03"].link,
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
          <ImagesLayoutF
            images={[
              {
                src: ALL_PROJECT_IMAGES["VVC_SKETCH03"].src,
                alt: ALL_PROJECT_IMAGES["VVC_SKETCH03"].alt,
                link: ALL_PROJECT_IMAGES["VVC_SKETCH03"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["VVC01"].src,
                alt: ALL_PROJECT_IMAGES["VVC01"].alt,
                link: ALL_PROJECT_IMAGES["VVC01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["NYH05"].src,
                alt: ALL_PROJECT_IMAGES["NYH05"].alt,
                link: ALL_PROJECT_IMAGES["NYH05"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["VVC_SKETCH01"].src,
                alt: ALL_PROJECT_IMAGES["VVC_SKETCH01"].alt,
                link: ALL_PROJECT_IMAGES["VVC_SKETCH01"].link,
              },
              {
                src: ALL_PROJECT_IMAGES["BTM_AXO01"].src,
                alt: ALL_PROJECT_IMAGES["BTM_AXO01"].alt,
                link: ALL_PROJECT_IMAGES["BTM_AXO01"].link,
              },
            ]}
          />
        </div>

        {/* Just a margin Container */}
        <div className={styles.column2} />
      </section>
    </>
  );
}
