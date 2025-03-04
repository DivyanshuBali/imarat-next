import Image from "next/image";
import styles from "./page.module.css";
import EarthCenterMudBuilding from "../../public/assets/landing01.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.column1}>
        <div className={styles.landingImgContainer}>
          <Image
            alt="A picture of a mud building at Earth Center"
            src={EarthCenterMudBuilding}
            layout="fill"
            objectFit="cover"
            style={{ filter: "grayscale(1)" }}
          />
          <div className={styles.bgDark}></div>
          <div className={styles.imaratLogoContainer}>
            <div className={styles.logoTitle}>IMARAT ARCHITECTS</div>
            <div className={styles.logoUnderline}></div>
          </div>
        </div>
        <p className={styles.subtitle}>mud walls that curve, avoiding felling of trees, constructing amorphous spaces</p>
      </div>
      <div className={styles.column2}></div>
    </>
  );
}
