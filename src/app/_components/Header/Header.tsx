"use client";

import styles from "./HeaderStyles.module.css";

import imaratLogo from "../../../../public/imarat_logo.svg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.headerContent}>
      <Link href="/" style={{ height: "40px" }}>
        <Image src={imaratLogo} height={40} alt="imarat logo" priority />
      </Link>
      <ul>
        <li className={pathname === "/projects" ? styles.active : ""}>
          PROJECTS
        </li>
        <li className={pathname === "/about" ? styles.active : ""}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      {/* layout empty div */}
      <div />
    </header>
  );
}

export default Header;
