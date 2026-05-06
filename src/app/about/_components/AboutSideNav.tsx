"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AboutSideNav.module.css";

const NAV_ITEMS = [
  { label: "ABOUT US", href: "/about" },
  { label: "OUR TEAM", href: "/about/our-team" },
  { label: "WORKS", href: "/about/works" },
] as const;

export default function AboutSideNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.sideNav} aria-label="About section navigation">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? styles.active : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
