import React from "react";
import styles from "./layout.module.css";
import AboutSideNav from "./_components/AboutSideNav";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.aboutLayout}>
      <AboutSideNav />
      <div className={styles.divider} aria-hidden="true" />
      <main className={styles.aboutMain}>{children}</main>
    </div>
  );
}
