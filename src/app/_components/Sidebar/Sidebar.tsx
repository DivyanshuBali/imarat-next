import { useAppContext } from "@/app/_contexts/AppContext";
import Bulletin from "./Bulletin/Bulletin";
import styles from "./Sidebar.module.css";
import { motion } from "motion/react";

import React from "react";
import Link from "next/link";

function Sidebar() {
  const { interactionEnabled } = useAppContext();

  return (
    <div
      className={`${styles.sidebar} ${
        interactionEnabled ? styles.interactionEnabled : ""
      }`}
    >
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarInner__logoAndNav}>
          <motion.div
            style={{
              width: "4px",
              backgroundColor: "#f6d934",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            initial={{ height: "0%" }}
            animate={{ height: interactionEnabled ? "100%" : "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* IMARAT ARCHITECTS LOGO */}
          <Link href="/">
            <div className={styles.imaratLogoContainer}>
              <div className={styles.logoTitle}>IMARAT ARCHITECTS</div>
              <div className={styles.logoUnderline}></div>
            </div>
          </Link>
        </div>

        {/* BULLETIN */}
        <Bulletin />
      </div>
    </div>
  );
}

export default Sidebar;
