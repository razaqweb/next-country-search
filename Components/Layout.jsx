import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import { Fragment } from "react";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Country Search</title>
      </Head>
      <Nav />
      <main className={styles.container}>{children}</main>
    </Fragment>
  );
};

export default Layout;
