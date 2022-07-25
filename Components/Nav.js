import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link href="/">
          <li>Home</li>
        </Link>

        <li>
          <a href="https://github.com/razaqweb/country-search" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
