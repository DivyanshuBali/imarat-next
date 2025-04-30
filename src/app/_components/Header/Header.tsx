import styles from "./HeaderStyles.module.css";

import Image from "next/image";
import React from "react";

import imaratLogo from "../../../../public/imarat_logo.svg";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.headerContent}>
      <Link href="/">
        <Image src={imaratLogo} height={40} alt="imarat logo" />
      </Link>
      <ul>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      {/* layout empty div */}
      <div />
    </header>
  );
}

export default Header;
