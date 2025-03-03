import Bulletin from "../Bulletin/Bulletin";
import styles from "./Sidebar.module.css";

import React from "react";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* IMARAT ARCHITECTS LOGO */}
      <div className={styles.imaratLogoContainer}>
        <div className={styles.logoTitle}>IMARAT ARCHITECTS</div>
        <div className={styles.logoUnderline}></div>
      </div>

      {/* BULLETIN */}
      <Bulletin />
    </div>
  );
}

export default Sidebar;
