import Landing from "./_components/Landing/Landing";
import Landing2 from "./_components/Landing2/Landing2";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* INTRO INTERACTION  */}
      <section className={styles.section1}>
        <div className={styles.column1}>
          <Landing />
        </div>
        <div className={styles.column2}></div>
        <div className={styles.column3}></div>
      </section>

      {/* AXONOMATRIC SECTION */}
      <section className={styles.section2}>
        <div className={styles.column1}>
          <Landing2 />
        </div>
        <div className={styles.column2}></div>
        <div className={styles.column3}></div>
      </section>

      {/* SECTION 3 */}
      <section>
        <div className={styles.column1}></div>
        <div className={styles.column2}></div>
        <div className={styles.column3}></div>
      </section>
    </>
  );
}
