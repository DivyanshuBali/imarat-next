import React, { useState } from "react";
import styles from "./Navigation.module.css";

type NavSection = "projects" | "contact" | "about" | "writings";

function Navigation() {
  const [, setActiveNav] = useState<NavSection | string>("");

  // Update URL when state changes
  const handleNavChange = (nav: NavSection) => {
    setActiveNav(nav);
  };

  return (
    <div className={styles.navigationContainer}>
      <ul>
        <li onClick={() => handleNavChange("projects")}>PROJECTS</li>
        <li onClick={() => handleNavChange("contact")}>CONTACT</li>
        <li onClick={() => handleNavChange("about")}>ABOUT</li>
        <li onClick={() => handleNavChange("writings")}>WRITINGS</li>
      </ul>
    </div>
  );
}

export default Navigation;
