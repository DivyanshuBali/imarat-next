"use client";

import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

import styles from "./LandingCarousel.module.css";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence } from "motion/react";

type Props = {
  images: {
    src: StaticImageData | string | null;
    alt: string;
    link: string;
  }[];
};

export default function LandingCarousel(props: Props) {
  const { images } = props;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <motion.div className={styles.imageCarouselContainer}>
      <div className={styles.imageContainer}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={activeImageIndex}
          >
            <Image
              fill
              src={images[activeImageIndex].src || ""}
              alt={images[activeImageIndex].alt}
              className={styles.img}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
