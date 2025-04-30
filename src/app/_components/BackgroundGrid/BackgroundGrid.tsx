import styles from "./BackgroundGrid.module.css";

import * as motion from "motion/react-client";

export default function BackgroundGrid() {
  return (
    <motion.div
      className={styles.bgGrid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
}
