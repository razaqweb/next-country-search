import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>

        <li>
          <a
            href="https://github.com/razaqweb/next-country-search"
            target="_blank"
            className={styles.navLink}
          >
            Code
          </a>
        </li>
        <li>
          <a
            href="https://razaqweb.github.io/"
            target="_blank"
            className={styles.navLink}
          >
            razaqweb.github.io
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
