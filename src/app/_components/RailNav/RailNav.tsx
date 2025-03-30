"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import styles from "./RailNav.module.css";
import Link from "next/link";
import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";

enum RailItems {
  PROJECTS = "PROJECTS",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

function RailNav() {
  const [selectedRailItem, setSelectedRailItem] = useState<RailItems | null>(
    null
  );

  const handleRailItemClick = (itemName: RailItems) => {
    if (selectedRailItem === itemName) {
      setSelectedRailItem(null);
    } else {
      setSelectedRailItem(itemName);
    }
  };

  // PROJECTS CONTENT
  const ProjectsContent = () => {
    if (selectedRailItem !== RailItems.PROJECTS) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          {Object.values(PROJECT_KEYS).map((project, index) => (
            <motion.li
              key={project}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.1 + index * 0.1,
                  ease: "easeOut",
                },
              }}
              whileHover={{
                x: 10,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
            >
              <Link href={`/projects/${PROJECT_DATA[project].link}`}>
                {PROJECT_DATA[project].title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  // ABOUT CONTENT
  const AboutContent = () => {
    if (selectedRailItem !== RailItems.ABOUT) return null;

    return <h1>About</h1>;
  };

  // CONTACT CONTENT
  const ContactContent = () => {
    if (selectedRailItem !== RailItems.CONTACT) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={styles.contactContainer}
      >
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <p>1252/1</p>
            <p>Sector 43B</p>
            <p>Chandigarh</p>
          </div>

          <div className={styles.contactItem}>
            <p>
              <a href="mailto:info@imaratarchitects.com">
                info@imaratarchitects.com
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <a href="tel:+919988111252">
              <p>+91 99881 11252</p>
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/earth.misaal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>
            <a
              href="https://www.instagram.com/imarat_earth"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/in/ar-savneet-kaur-72419a19"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={styles.railNavContainer}>
      <div className={styles.railNav}>
        <motion.section
          animate={{ width: selectedRailItem ? "500px" : "0px" }}
          className={styles.selectedNavContent}
        >
          {selectedRailItem && (
            <motion.button
              className={styles.closeButton}
              onClick={() => setSelectedRailItem(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close panel"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          )}
          <ProjectsContent />
          <AboutContent />
          <ContactContent />
        </motion.section>

        <nav className={styles.navItemContainer}>
          {Object.values(RailItems).map((item) => (
            <button
              key={item}
              className={styles.navItem}
              onClick={() => handleRailItemClick(item as RailItems)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleRailItemClick(item as RailItems);
                }
              }}
              aria-expanded={selectedRailItem === item}
              aria-controls={`${item.toLowerCase()}-content`}
              tabIndex={0}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Just a column to add dynamic margin from the right */}
      <div className={styles.gapColumn}></div>
    </div>
  );
}

export default RailNav;
