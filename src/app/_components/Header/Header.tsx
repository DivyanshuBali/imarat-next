"use client";

import styles from "./HeaderStyles.module.css";

import imaratLogo from "../../../../public/imarat_logo.svg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.headerContent}>
      {/* layout empty div - shows up at viewport < 768px */}
      <div className={styles.firstLayoutDiv} />

      <Link href="/" style={{ height: "40px" }}>
        <Image src={imaratLogo} alt="imarat logo" priority />
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
      <div className={styles.lastLayoutDiv} />

      <HamburgerMenuIcon
        width={20}
        height={20}
        style={{ marginRight: "0.5rem" }}
      />
    </header>
  );
}

export default Header;
