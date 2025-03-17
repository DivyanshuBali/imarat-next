"use client";

import React from "react";
import { motion } from "motion/react";

import styles from "./Column2.module.css";
import { useAppContext } from "@/app/_contexts/AppContext";

function Column2() {
  const { interactionEnabled } = useAppContext();

  return (
    <motion.div
      initial={false}
      animate={{ opacity: interactionEnabled ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className={styles.column2Container}
    >
      <div className={styles.writing1}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In veniam
          unde est quibusdam ducimus at nihil quo, quisquam voluptatum illo
          asperiores nobis maxime laborum assumenda vel. Odio esse culpa
          eligendi!
        </p>
      </div>

      <div className={styles.writing2}>
        <h3>EMERGING ARCHITECT</h3>
      </div>
    </motion.div>
  );
}

export default Column2;
