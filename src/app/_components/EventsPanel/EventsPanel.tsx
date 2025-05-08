"use client";

import { useToggle } from "@/app/_hooks/useToggle";
import styles from "./EventsPanel.module.css";
import { motion } from "motion/react";

import React from "react";

function EventsPanel() {
  const [state, toggle] = useToggle();

  return (
    <>
      <motion.div
        initial={{ right: 0 }}
        animate={{ right: state ? 540 : 0 }}
        transition={{ duration: 1 }}
        className={styles.eventsPanelContainer}
        onClick={toggle}
      >
        <div className={styles.title}>EVENTS</div>
      </motion.div>
      <motion.div
        initial={{ right: -40 }}
        animate={{ right: state ? 500 : -40 }}
        transition={{ duration: 1 }}
        className={styles.eventsPanelContainer}
        onClick={toggle}
      >
        <div className={styles.title}>EVENTS</div>
      </motion.div>
    </>
  );
}

export default EventsPanel;
