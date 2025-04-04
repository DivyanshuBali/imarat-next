"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import styles from "./RailNav.module.css";
import Link from "next/link";
import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import Image from "next/image";

import AR_SK from "../../../../public/assets/AR_SAVNEET_KAUR.jpeg";

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
              <Link
                onClick={() => setSelectedRailItem(null)}
                href={`/projects/${PROJECT_DATA[project].link}`}
              >
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

    return (
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={`${styles.aboutContainer} ${styles.hiddenScrollbar}`}
      >
        <div className={styles.imageContainer}>
          <Image src={AR_SK} alt="Ar. Savneet Kaur" className={styles.image} />
        </div>

        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
          className={styles.content}
        >
          <p>
            Ar. Savneet Kaur established IMARAT ARCHITECTS in 1995, after
            graduating from the Chandigarh College of Architecture. The firm
            went on for the next 20 years to do over 250 built projects, mainly
            residences. During the last decade and a half, the practice shifted
            its perspective towards Sustainability and Research.
          </p>
          <p>
            Savneet, now also a visiting Faculty at CCA, heads a small team of
            architects devoted to limited projects.
          </p>
          <p>
            Alongside, she heads the Imarat which is devoted to preserving and
            nourishing the venracular knowledge systems by employing artisans
            and local craftsmen at the Earth Centre (ICEA).
          </p>
        </motion.div>

        <div className={styles.teamInfo}>
          <div className={styles.bold}>CURRENT TEAM</div>

          <div>
            <div className={styles.bold}>ARCHITECTS</div>
            <div>MANNAT SINGH</div>
            <div>NEHA DAHIYA</div>
            <div>GAMANPREET KAUR</div>
          </div>

          <div>
            <div className={styles.bold}>ARTISANS</div>
            <div>RASHID KHAN</div>
            <div>RASHID KHAN Jr.</div>
            <div>VED</div>
          </div>
        </div>
      </motion.div>
    );
  };

  // CONTACT CONTENT
  const ContactContent = () => {
    if (selectedRailItem !== RailItems.CONTACT) return null;

    return (
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        transition={{ duration: 0.3, delay: 0.2 }}
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
              <Link href="mailto:info@imaratarchitects.com">
                info@imaratarchitects.com
              </Link>
            </p>
          </div>

          <div className={styles.contactItem}>
            <Link href="tel:+919988111252">
              <p>+91 99881 11252</p>
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <Link
              href="https://www.facebook.com/earth.misaal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </Link>
            <Link
              href="https://www.instagram.com/imarat_earth"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </Link>
            <Link
              href="https://www.linkedin.com/in/ar-savneet-kaur-72419a19"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={styles.railNavContainer}>
      <div className={styles.railNav}>
        <motion.section
          animate={{ width: selectedRailItem ? "380px" : "0px" }}
          className={`${styles.selectedNavContent} ${styles.hiddenScrollbar}`}
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
            <motion.button
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
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Just a column to add dynamic margin from the right */}
      <div className={styles.gapColumn}></div>
    </div>
  );
}

export default RailNav;
