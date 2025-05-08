import styles from "./page.module.css";

import { LANDING_CAROUSEL_IMAGES } from "./_utils/constants";
import LandingCarousel from "./_components/LandingCarousel/LandingCarousel";

export default function Home() {
  return (
    <section className={styles.landingContent}>
      <LandingCarousel images={LANDING_CAROUSEL_IMAGES} />
    </section>
  );
}
