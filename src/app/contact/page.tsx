import styles from "./page.module.css";

import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";

import IMO_AXO from "../../../public/assets/IMO_AXO02.png";

function Contact() {
  return (
    <section className={styles.contactContainer}>
      <motion.div
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={styles.contactContent}
      >
        {/* IMARAT SECTION DRAWING */}
        <div className={styles.imageContainer}>
          <Image
            src={IMO_AXO}
            alt="Imarat Office, Studio 1252 Section Drawing"
          />
        </div>

        {/* CONTACT INFO */}
        <div className={styles.gridContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactType}>A</div>
              <div>
                <p>1252/1</p>
                <p>Sector 43B</p>
                <p>Chandigarh</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactType}>M</div>
              <div>
                <p>
                  <Link href="mailto:info@imaratarchitects.com">
                    info@imaratarchitects.com
                  </Link>
                </p>

                <p>
                  <Link href="mailto:mannat@imaratarchitects.com">
                    mannat@imaratarchitects.com
                  </Link>
                </p>

                <p>
                  <Link href="mailto:savneet@imaratarchitects.com">
                    savneet@imaratarchitects.com
                  </Link>
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactType}>T</div>
              <Link href="tel:+919988111252">
                <p>+91 99881 11252</p>
              </Link>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactType}>S</div>
              <div>
                <Link
                  href="https://www.facebook.com/earth.misaal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FACEBOOK
                </Link>
                <br />
                <Link
                  href="https://www.instagram.com/imarat_earth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </Link>
                <br />
                <Link
                  href="https://www.linkedin.com/in/ar-savneet-kaur-72419a19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
