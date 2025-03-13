"use client";

import React from "react";
import Image from "next/image";

import styles from "./Landing2.module.css";
import { useAppContext } from "@/app/_contexts/AppContext";
import { motion } from "motion/react";

import landing02 from "../../../../public/assets/landing02.jpg";
import landing03 from "../../../../public/assets/landing03.jpg";

function Landing2() {
  const { interactionEnabled } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: interactionEnabled ? 1 : 0 }}
      className={styles.landing2Container}
    >
      <div className={styles.img1}>
        <Image
          alt="A picture of a mud building at Earth Center"
          src={landing02}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div className={styles.img2}>
        <Image
          alt="A picture of a mud building at Earth Center"
          src={landing03}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Landing2;
