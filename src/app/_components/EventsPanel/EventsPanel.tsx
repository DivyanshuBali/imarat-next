"use client";

import { useToggle } from "@/app/_hooks/useToggle";
import styles from "./EventsPanel.module.css";
import { motion } from "motion/react";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpIcon,
  CaretDownIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

const EVENTS = [
  {
    id: 1,
    title: "BUILDING AS A LIVING ARCHIVE",
    date: "12-09-25 to 16-09-25",
    description: {
      subtitle:
        "Documenting historic site as a 'Living Archive' Condition assessment of historic site. Conservation approaches. Curating an on-site exhibition.",
      href: "https://forms.gle/1397yw9Q5vhbSjFY8",
      place: "Shamgarh, Karnal",
      additionalInfo: ["Architects and Students of Architecture (2YR+)"],
    },
  },
  {
    id: 2,
    title: "HANDMADE EARTH",
    date: "24-06-25",
    description: {
      href: "https://www.instagram.com/p/DLSXgBxy6bu/",
      place: "IIT, Roorkee",
    },
  },
];

function EventsPanel() {
  const [state, toggle] = useToggle();
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const handleEventClick = (eventId: number) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  return (
    <section
      className={`${styles.eventsPanelContainer} ${
        state ? styles.animateIn : ""
      } `}
      data-nosnippet="true" // hide from search engines
      aria-label="Upcoming Events"
      tabIndex={-1}
    >
      <button
        className={styles.eventsPanelHeader}
        onClick={toggle}
        aria-expanded={state}
        aria-controls="events-panel-content"
        type="button"
        tabIndex={0}
      >
        <span className={styles.title}>EVENTS</span>
        <motion.div
          initial={false}
          animate={{ rotate: state ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          <ArrowUpIcon />
        </motion.div>
      </button>

      <div
        className={styles.eventsPanelContent}
        id="events-panel-content"
        role="region"
        aria-live="polite"
        aria-hidden={!state}
        tabIndex={0}
      >
        {EVENTS.map((ev, index) => {
          const isExpanded = expandedEventId === ev.id;
          return (
            <div
              key={ev.id}
              tabIndex={state ? 0 : -1}
              aria-label={`${ev.title}, ${ev.date}`}
            >
              <div className={styles.eventWrapper}>
                <button
                  className={styles.eventContent}
                  onClick={() => handleEventClick(ev.id)}
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`event-description-${ev.id}`}
                >
                  <div className={styles.eventTitle}>{ev.title}</div>
                  <div
                    className={styles.eventTitle}
                    style={{ display: "flex", gap: "0.2rem" }}
                  >
                    {ev.date}
                    <motion.div
                      initial={false}
                      animate={{ rotate: isExpanded ? 0 : 180 }}
                      transition={{ duration: 0.4 }}
                      aria-hidden="true"
                    >
                      <CaretDownIcon
                        aria-hidden="true"
                        height={15}
                        width={15}
                        style={{ transform: "translateY(2px)" }}
                      />
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  className={styles.eventDescription}
                  id={`event-description-${ev.id}`}
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  aria-hidden={!isExpanded}
                >
                  <div className={styles.eventDescriptionLeftColumn}>
                    {ev.description.subtitle && (
                      <div className={styles.eventDescriptionSubtitle}>
                        {ev.description.subtitle}
                      </div>
                    )}

                    {ev.description.href && (
                      <Link
                        href={ev.description.href}
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        <span>More Info</span>
                        <ExternalLinkIcon
                          height={12}
                          width={12}
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>

                  <div className={styles.eventDescriptionRightColumn}>
                    {ev.description.place && (
                      <div className={styles.eventDescriptionPlace}>
                        {ev.description.place}
                      </div>
                    )}
                  </div>
                </motion.div>

                {index === EVENTS.length - 1 && (
                  <div className={styles.divider} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EventsPanel;
