"use client";

import React from "react";

import EarthCenterMudBuilding from "../../../../public/assets/landing01.jpg";
import Image from "next/image";

import styles from "./Row1.module.css";
import { useToggle } from "@/app/_hooks/useToggle";
import { useAppContext } from "@/app/_contexts/AppContext";
import { AnimatePresence } from "motion/react";
import BackgroundGrid from "../BackgroundGrid/BackgroundGrid";
import { motion } from "motion/react";

function Row1() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hover, _, setHoverTrue, setHoverFalse] = useToggle();
  const { interactionEnabled, setInteractionEnabled } = useAppContext();

  return (
    <div
      style={{
        height: "85vh",
        display: "grid",
        gridTemplateRows: "95% 1fr",
      }}
    >
      <BackgroundGrid />
      <div
        className={styles.landingImgContainer}
        onMouseEnter={setHoverTrue}
        onMouseOut={setHoverFalse}
        onClick={() => setInteractionEnabled(true)}
      >
        <Image
          alt="A picture of a mud building at Earth Center"
          src={EarthCenterMudBuilding}
          className={styles.landingImg}
          style={{
            objectFit: "cover",
            filter: interactionEnabled ? "" : "grayscale(100%)",
            transition: "filter 1s",
            height: "100%",
            width: "100%",
          }}
        />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: interactionEnabled ? 0 : 1 }}
            exit={{ opacity: interactionEnabled ? 0 : 1 }}
            transition={{ duration: 1 }}
            className={styles.bgDark}
          ></motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {!interactionEnabled && (
            <motion.div
              key="imarat-logo"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={`${styles.imaratLogoContainer} ${
                hover ? styles.hover : ""
              }`}
            >
              <div
                className={`${styles.logoTitle} ${hover ? styles.hover : ""}`}
              >
                IMARAT ARCHITECTS
              </div>
              <div
                className={`${styles.logoUnderline} ${
                  hover ? styles.hover : ""
                }`}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className={styles.subtitle}>
        mud walls that curve, avoiding felling of trees, constructing amorphous
        spaces
      </p>
    </div>
  );
}

export default Row1;
