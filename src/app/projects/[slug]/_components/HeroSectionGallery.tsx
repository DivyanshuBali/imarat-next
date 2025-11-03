"use client";

import NextImageWrapper from "@/app/_components/NextImageWrapper/NextImageWrapper";
import styles from "./HeroSectionGallery.module.css";
import React, { useState } from "react";
import { ProjectData } from "@/app/_utils/types";
import { motion, AnimatePresence } from "motion/react";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import ScrollButton from "./ScrollToContentButton";

type Props = {
  projectData: ProjectData;
};

function HeroSectionGallery(props: Props) {
  const { projectData } = props;

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
        }}
      />
    )),
  ];

  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

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
          <button onClick={handlePrevious}>
            <CaretLeftIcon height={30} width={30} />
          </button>

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

          <button onClick={handleNext}>
            <CaretRightIcon height={30} width={30} />
          </button>
        </div>

        <h3>{projectData.title}</h3>
        <ScrollButton className={styles.scrollToContentButton} />
      </div>
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
