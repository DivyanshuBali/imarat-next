"use client";

import { useToggle } from "@/app/_hooks/useToggle";
import styles from "./EventsPanel.module.css";
import { motion } from "motion/react";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const EVENTS = [
  {
    title: "WORKSHOP ON WOOD",
    date: "2080-14-32",
    href: "",
  },
  {
    title: "LOREM IPSUM",
    date: "2080-14-33",
    href: "",
  },
];

function EventsPanel() {
  const [state, toggle] = useToggle();

  return (
    <div
      className={`${styles.eventsPanelContainer} ${
        state ? styles.animateIn : ""
      } `}
    >
      <div className={styles.eventsPanelHeader} onClick={toggle}>
        <div className={styles.title}>EVENTS</div>
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={false}
          animate={{ rotate: state ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </motion.svg>
      </div>
      <div className={styles.eventsPanelContent}>
        {EVENTS.map((ev, index) => {
          return (
            <Link href={ev.href} key={ev.date}>
              <div className={styles.eventWrapper}>
                <div className={styles.eventTitle}>{ev.title}</div>
                <div
                  className={styles.eventTitle}
                  style={{ display: "flex", gap: "1rem" }}
                >
                  {ev.date}
                  <ArrowRightIcon />
                </div>
              </div>

              {index === EVENTS.length - 1 && (
                <div className={styles.divider}></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default EventsPanel;
