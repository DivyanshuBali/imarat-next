import Row1 from "./_components/Row1/Row1";
import Row2 from "./_components/Row2/Row2";
import Column2 from "./_components/Row2/Column2/Column2";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* SECTION 1 - INTRO INTERACTION  */}
      <section className={styles.section1}>
        <div className={styles.column1}>
          <Row1 />
        </div>
        <div className={styles.column2}></div>
        <div className={styles.column3}></div>
      </section>

      {/* SECTION 2 - AXONOMATRIC SECTION */}
      <section className={styles.section2}>
        <div className={styles.column1}>
          <Row2 />
        </div>
        <div className={styles.column2}>
          <Column2 />
        </div>
        <div className={styles.column3}></div>
      </section>

      {/* SECTION 3 - IMAGES */}
      <section>
        <div className={styles.column1}></div>
        <div className={styles.column2}></div>
        <div className={styles.column3}></div>
      </section>
    </>
  );
}
