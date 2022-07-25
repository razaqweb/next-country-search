import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import { Fragment } from "react";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <main className={styles.container}>{children}</main>;
    </Fragment>
  );
};

export default Layout;
