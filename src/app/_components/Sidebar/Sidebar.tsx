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
      {/* <div>BULLEIN HERE</div> */}
    </div>
  );
}

export default Sidebar;
