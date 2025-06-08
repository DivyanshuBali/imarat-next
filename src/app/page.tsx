"use client";

import styles from "./page.module.css";

import { useState } from "react";
import { LANDING_CAROUSEL_DATA } from "./data";
import Link from "next/link";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    if (imageIndex === LANDING_CAROUSEL_DATA.length - 1) {
      return setImageIndex(0);
    }

    setImageIndex(imageIndex + 1);
  };

  const handlePrev = () => {
    if (imageIndex === 0) {
      return setImageIndex(LANDING_CAROUSEL_DATA.length - 1);
    }

    setImageIndex(imageIndex - 1);
  };

  return (
    <section className={styles.landingContainer}>
      <div className={styles.landingContent}>
        <button
          className={styles.prevArrowContainer}
          onClick={handlePrev}
        ></button>

        <div className={styles.slider}>
          {LANDING_CAROUSEL_DATA.map((data, index) => {
            return (
              <div
                className={styles.slide}
                key={`${data.title}-${index}`}
                style={{ translate: `${-100 * imageIndex}%` }}
              >
                {data.content}
              </div>
            );
          })}
        </div>

        <div className={styles.navButtons}>
          <div style={{ display: "flex", gap: "0.2rem" }}>
            <div
              className={styles.navTitle}
              style={{
                color: LANDING_CAROUSEL_DATA[imageIndex].textWhite
                  ? "white"
                  : "black",
              }}
            >
              {imageIndex + 1}/{LANDING_CAROUSEL_DATA.length}{" "}
              <Link href={LANDING_CAROUSEL_DATA[imageIndex].link}>
                {LANDING_CAROUSEL_DATA[imageIndex].title}
              </Link>
            </div>
          </div>
        </div>

        <button
          className={styles.nextArrowContainer}
          onClick={handleNext}
        ></button>
      </div>
    </section>
  );
}
