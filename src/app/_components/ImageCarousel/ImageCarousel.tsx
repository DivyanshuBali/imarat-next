"use client";

import React, { useState } from "react";
import { ProjectImage } from "@/app/_utils/types";
import * as motion from "motion/react-client";

import styles from "./ImageCarousel.module.css";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence } from "motion/react";
import { useToggle } from "@/app/_hooks/useToggle";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: ProjectImage[];
};

export default function ImageCarousel(props: Props) {
  const { images } = props;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, toggleLightbox] = useToggle(false);

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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={styles.imageCarouselContainer}
    >
      <div className={styles.imageContainer}>
        {/* IMAGE */}
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* PREV BUTTON */}
        <button
          className={`${styles.imageControls} ${styles.prevArrowContainer}`}
          onClick={() => handleSetActiveImage("prev")}
        ></button>

        {/* ZOOM BUTTON */}
        <button
          className={`${styles.imageControls} ${styles.zoomPhotoContainer}`}
          onClick={toggleLightbox}
        ></button>

        {/* NEXT BUTTON */}
        <button
          className={`${styles.imageControls} ${styles.nextArrowContainer}`}
          onClick={() => handleSetActiveImage("next")}
        ></button>
      </div>

      <div className={styles.navButtons}>
        <button onClick={() => handleSetActiveImage("prev")}>
          <motion.div whileHover={{ x: -4 }}>
            <CaretLeftIcon height={20} width={20} />
          </motion.div>
        </button>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <div className={styles.navTitle}>
            {activeImageIndex + 1}/{images.length}
          </div>
        </div>
        <button onClick={() => handleSetActiveImage("next")}>
          <motion.div whileHover={{ x: 4 }}>
            <CaretRightIcon height={20} width={20} />
          </motion.div>
        </button>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={toggleLightbox}
        slides={images.map((img) => ({
          src: typeof img.src === "string" ? img.src : img.src?.src ?? "",
        }))}
        index={activeImageIndex}
        plugins={[Zoom]}
      />
    </motion.div>
  );
}
