import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import { Fragment } from "react";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="An open source directory of every country in the world, searchable by name or languages spoken."
        />

        <meta property="og:title" content="Country Search" />
        <meta property="og:type" content="web application" />
        <meta
          property="og:description"
          content="An open source country directory."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/VNhy7qp7/Country-Search-Image.png"
        />
        <meta
          property="og:url"
          content="https://next-country-search.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <title>Country Search</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.container}>{children}</main>
    </Fragment>
  );
};

export default Layout;
