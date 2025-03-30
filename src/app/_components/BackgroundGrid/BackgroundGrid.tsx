"use client";

import { useAppContext } from "@/app/_contexts/AppContext";
import { motion } from "motion/react";

import styles from "./BackgroundGrid.module.css";

export default function BackgroundGrid() {
  const { interactionEnabled } = useAppContext();

  return (
    <motion.div
      className={styles.bgGrid}
      initial={{ opacity: 0 }}
      animate={{ opacity: interactionEnabled ? 1 : 0 }}
      transition={{ duration: 2 }}
    />
  );
}
