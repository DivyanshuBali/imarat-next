"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./Bulletin.module.css";
import { useAppContext } from "@/app/_contexts/AppContext";
import Link from "next/link";

const BULLETINS_DATA = [
  {
    id: 0,
    date: "4 APRIL",
    title: "EARTH BUILDER'S ASSOCIATION OF AUSTRALIA",
    link: "https://www.ebaa.asn.au/annual-conference/2025-ebaa-earth-building-conference-agm/",
  },
];

function Bulletin() {
  // const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
  //   null
  // );
  const { interactionEnabled } = useAppContext();

  // const handleClick = (
  //   e: React.KeyboardEvent<HTMLDivElement>,
  //   id: number,
  //   isExpanded: boolean
  // ) => {
  //   if (e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     setExpandedCardIndex(isExpanded ? null : id);
  //   }
  // };

  return (
    <div className={styles.bulletinSection}>
      <div className={styles.divider} />

      {BULLETINS_DATA.map((b, index) => {
        // const isExpanded = expandedCardIndex === b.id;

        return (
          <Link
            href={b.link}
            key={b.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className={styles.bulletin}
              // onClick={() => setExpandedCardIndex(isExpanded ? null : b.id)}
              // onKeyDown={(e) => handleClick(e, b.id, isExpanded)}
              role="button"
              tabIndex={0}
              // aria-expanded={isExpanded}
              // aria-controls={`bulletin-content-${b.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: interactionEnabled ? 1 : 0,
                x: interactionEnabled ? 0 : 50,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <div className={styles.date}>{b.date}</div>
              <div className={styles.title}>{b.title}</div>

              {/* <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isExpanded ? "200px" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.bulletinContent}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence> */}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}

export default Bulletin;
