import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/projects">PROJECTS</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/about">ABOUT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/technologies">TECHNOLOGIES</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/projects">PROJECTS</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/technologies">TECHNOLOGIES</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/about">ABOUT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
