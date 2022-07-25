import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/CountryId.module.css";

const Country = ({ country }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [countryData] = country;

  const { official } = countryData.name;
  const { common } = countryData.name;
  const { coatOfArms } = countryData;
  const { continents } = countryData;
  const [continent] = continents;

  return (
    <div className={styles.countryDetailsContainer}>
      <div className={styles.imgContainer}>
        <img
          src={coatOfArms.svg}
          alt={`${common}'s flag`}
          className={styles.flagImg}
        />
      </div>
      <ul className={styles.listItems}>
        <li>Official Name: {official}</li>
        <li>Continent: {continent}</li>
      </ul>
    </div>
  );
};

export default Country;

export async function getStaticPaths() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  const paths = await data.map((dataset) => {
    return {
      params: {
        countryId: `${dataset.cca3}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.countryId}`
  );
  const data = await response.json();
  return {
    props: {
      country: await data,
    },
  };
}
