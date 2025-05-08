"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";

import styles from "./LandingCarousel.module.css";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence } from "motion/react";

type Props = {
  images: {
    src: StaticImageData | null;
    alt: string;
    title: string;
  }[];
};

export default function LandingCarousel(props: Props) {
  const { images } = props;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleSetActiveImage = (type: "next" | "prev") => {
    if (type === "next") {
      if (activeImageIndex === images.length - 1) setActiveImageIndex(0);
      else setActiveImageIndex(activeImageIndex + 1);
    }

    if (type === "prev") {
      if (activeImageIndex === 0) setActiveImageIndex(images.length - 1);
      else setActiveImageIndex(activeImageIndex - 1);
    }
  };

  if (!images.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={styles.imageCarouselContainer}
    >
      <div className={styles.imageContainer}>
        <button
          className={styles.prevArrowContainer}
          onClick={() => handleSetActiveImage("prev")}
        ></button>
        <AnimatePresence>
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              fill
              src={images[activeImageIndex].src || ""}
              alt={images[activeImageIndex].alt}
              className={styles.img}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
        <button
          className={styles.nextArrowContainer}
          onClick={() => handleSetActiveImage("next")}
        ></button>
      </div>

      <div className={styles.navButtons}>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <div className={styles.navTitle}>
            {activeImageIndex + 1}/{images.length}{" "}
            {images[activeImageIndex].title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
