import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/CountryId.module.css";

const Country = ({ country }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1 className={styles.loading}>Fetching Country data...</h1>;
  }

  const [countryData] = country;

  const { official } = countryData.name;
  const { common } = countryData.name;
  const { flags } = countryData;
  const { continents } = countryData;
  const [continent] = continents;
  const languages = countryData.languages
    ? Object.values(countryData.languages).join(", ")
    : "No language data found";

  const [currency] = countryData.currencies
    ? Object.values(countryData.currencies)
    : "No currency data found";

  const [capital] = countryData.capital
    ? Object.values(countryData.capital)
    : "---";

  return (
    <div className={styles.countryDetailsContainer}>
      <div className={styles.imgContainer}>
        <img
          src={flags.svg}
          alt={`${common}'s flag`}
          className={styles.flagImg}
        />
      </div>
      <ul className={styles.listItems}>
        <li>Official Name: {official}</li>
        <li>Continent: {continent}</li>
        <li>Capital City: {capital}</li>
        <li>Languages: {languages}</li>
        <li>
          Official Currency: {currency.symbol} &mdash; {currency.name}
        </li>
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
        countryId: dataset.cca3 ? `${dataset.cca3}` : null,
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
