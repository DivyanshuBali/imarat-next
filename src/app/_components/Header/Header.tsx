"use client";

import styles from "./HeaderStyles.module.css";

import imaratLogo from "../../../../public/imarat_logo.svg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useToggle } from "@/app/_hooks/useToggle";

function Header() {
  const pathname = usePathname();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useToggle();

  return (
    <header className={styles.headerContent}>
      {/* layout empty div - shows up at viewport < 768px */}
      <div className={styles.firstLayoutDiv} />

      <Link href="/" style={{ height: "40px" }}>
        <Image src={imaratLogo} alt="imarat logo" priority />
      </Link>

      <ul className={styles.fullScreen}>
        <li className={pathname === "/projects" ? styles.active : ""}>
          <Link href="/projects">PROJECTS</Link>
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

      {isHamburgerMenuOpen ? (
        <Cross1Icon
          width={20}
          height={20}
          style={{ marginRight: "0.5rem", cursor: "pointer" }}
          onClick={setIsHamburgerMenuOpen}
        />
      ) : (
        <HamburgerMenuIcon
          width={20}
          height={20}
          style={{ marginRight: "0.5rem", cursor: "pointer" }}
          onClick={setIsHamburgerMenuOpen}
        />
      )}

      <div
        className={`${styles.hamburgerMenu} ${
          isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ""
        }`}
      >
        <ul className={styles.hamburgerMenu__NavOptions}>
          <li className={pathname === "/projects" ? styles.active : ""}>
            <Link onClick={setIsHamburgerMenuOpen} href="/projects">
              PROJECTS
            </Link>
          </li>
          <li className={pathname === "/about" ? styles.active : ""}>
            <Link onClick={setIsHamburgerMenuOpen} href="/about">
              ABOUT
            </Link>
          </li>
          <li className={pathname === "/contact" ? styles.active : ""}>
            <Link onClick={setIsHamburgerMenuOpen} href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
