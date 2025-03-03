import React from "react";
import styles from "./Bulletin.module.css";

const BULLETINS = [
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
  return (
    <div className={styles.bulletinSection}>
      <div className={styles.divider} />

      {BULLETINS.map((b) => {
        return (
          <div className={styles.bulletin} key={b.id}>
            <div className={styles.date}>{b.date}</div>
            <div className={styles.title}>{b.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Bulletin;
