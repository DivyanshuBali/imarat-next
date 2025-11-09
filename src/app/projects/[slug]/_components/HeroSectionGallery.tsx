"use client";

import NextImageWrapper from "@/app/_components/NextImageWrapper/NextImageWrapper";
import styles from "./HeroSectionGallery.module.css";
import React, { useState } from "react";
import { ProjectData } from "@/app/_utils/types";
import { motion, AnimatePresence } from "motion/react";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import ScrollButton from "./ScrollToContentButton";
import Lightbox from "yet-another-react-lightbox";
import { useToggle } from "@/app/_hooks/useToggle";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

type Props = {
  projectData: ProjectData;
};

function HeroSectionGallery(props: Props) {
  const { projectData } = props;

  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
  const [lightboxOpen, toggleLightbox] = useToggle(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const drawings = [
    <HeroSectionAxo key="axo-0" projectData={projectData} />,
    ...projectData.images.drawings.map((drawing) => (
      <NextImageWrapper
        key={drawing.id}
        src={drawing.src as string}
        alt={drawing.alt}
        height={600}
        width={600}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={() => {
          setLightboxIndex(currentDrawingIndex - 1); // Subtract 1 to account for Axo at index 0
          toggleLightbox();
        }}
      />
    )),
  ];

  // Variants that depend on the navigation direction.
  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir === 1 ? 10 : -10 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir === 1 ? -10 : 10 }),
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentDrawingIndex(
      currentDrawingIndex === 0 ? drawings.length - 1 : currentDrawingIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentDrawingIndex(
      currentDrawingIndex === drawings.length - 1 ? 0 : currentDrawingIndex + 1
    );
  };

  return (
    <div className={styles.projectPageHeader}>
      <div className={styles.projectPageHeaderImageAndTitle}>
        {/* Project Drawings Carousel */}
        <div className={styles.projectDrawingsCarouselContainer}>
          {drawings.length > 1 && (
            <button onClick={handlePrevious}>
              <CaretLeftIcon height={30} width={30} />
            </button>
          )}

          <div className={styles.projectDrawingsCarousel}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={drawings[currentDrawingIndex].key}
                variants={slideVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {drawings[currentDrawingIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {drawings.length > 1 && (
            <button onClick={handleNext}>
              <CaretRightIcon height={30} width={30} />
            </button>
          )}
        </div>

        <h3>{projectData.title}</h3>
        <ScrollButton className={styles.scrollToContentButton} />
      </div>

      <Lightbox
        open={lightboxOpen}
        close={toggleLightbox}
        slides={projectData.images.drawings.map((img) => ({
          src: typeof img.src === "string" ? img.src : img.src?.src ?? "",
        }))}
        index={lightboxIndex}
        plugins={[Zoom]}
      />
    </div>
  );
}

function HeroSectionAxo(props: Props) {
  const { projectData } = props;

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectImage}>
        <div className={styles.imageContainer}>
          <NextImageWrapper
            src={projectData.images.thumbnails[0]}
            alt={projectData.title}
            height={600}
            width={600}
          />
        </div>
        <div className={styles.imageOverlay}>
          <NextImageWrapper
            src={projectData.images.thumbnails[1]}
            alt={projectData.title}
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSectionGallery;
