"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Bulletin.module.css";

const BULLETINS_DATA = [
  {
    id: 0,
    date: "4 APRIL",
    title: "WORKSHOP ON WOOD",
  },

  {
    id: 1,
    date: "10 JULY",
    title: "EARTH BUILDER'S ASSN. PLAN",
  },
];

function Bulletin() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null)

  return (
    <div className={styles.bulletinSection}>
      <div className={styles.divider} />

      {BULLETINS_DATA.map((b) => {
        const isExpanded = expandedCardIndex === b.id;

        return (
          <div
          className={styles.bulletin}
          key={b.id}
          onClick={() => setExpandedCardIndex(isExpanded ? null : b.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setExpandedCardIndex(isExpanded ? null : b.id);
            }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls={`bulletin-content-${b.id}`}
          
          >
            <div className={styles.date}>{b.date}</div>
            <div className={styles.title}>{b.title}</div>

            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? "200px" : 0, opacity: isExpanded ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.bulletinContent}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Bulletin;
