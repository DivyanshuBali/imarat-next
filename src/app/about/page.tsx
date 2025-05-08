import styles from "./page.module.css";

import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

import AR_SK from "../../../public/assets/AR_SAVNEET_KAUR.jpeg";

function AboutPage() {
  return (
    <section className={styles.aboutContainer}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${styles.aboutContent} ${styles.hiddenScrollbar}`}
      >
        <div className={styles.imageContainer}>
          <Image src={AR_SK} alt="Ar. Savneet Kaur" className={styles.image} />
        </div>

        <div className={styles.content}>
          <p className="georgia">
            Ar. Savneet Kaur established IMARAT ARCHITECTS in 1995, after
            graduating from the Chandigarh College of Architecture. The firm
            went on for the next 20 years to do over 250 built projects, mainly
            residences. During the last decade and a half, the practice shifted
            its perspective towards Sustainability and Research.
          </p>
          <p className="georgia">
            Savneet, now also a visiting Faculty at CCA, heads a small team of
            architects devoted to limited projects.
          </p>
          <p className="georgia">
            Alongside, she heads the Imarat which is devoted to preserving and
            nourishing the vernacular knowledge systems by employing artisans
            and local craftsmen at the Earth Centre (ICEA).
          </p>
        </div>

        <div className={styles.teamInfo}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
          >
            <div className={styles.bold}>ARCHITECTS</div>
            <div>MANNAT SINGH</div>
            <div>NEHA DAHIYA</div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
          >
            <div className={styles.bold}>ARTISANS</div>
            <div>RASHID KHAN</div>
            <div>RASHID KHAN Jr.</div>
            <div>VED</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutPage;
