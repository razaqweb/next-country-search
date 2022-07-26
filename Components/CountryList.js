import React from "react";
import styles from "../styles/CountryList.module.css";
import Link from "next/link";
import { Fragment } from "react";

const CountryList = ({ countries, searchValue, countryList }) => {
  const localSearchValue = searchValue.toLocaleLowerCase();

  return (
    <Fragment>
      <p className={styles.countryListText}>
        {" "}
        There are {countryList.length} countries in this list.
      </p>
      <div className={styles.countryListContainer}>
        {countries
          .filter((country) => {
            const [languageData] = country.languages;
            const filterName = country.name
              .toLocaleLowerCase()
              .includes(localSearchValue);
            const filterLang = languageData.name
              .toLocaleLowerCase()
              .includes(localSearchValue);

            return filterName || filterLang;
          })
          .map((country) => (
            <div key={country.name} className={styles.countryItemContainer}>
              <Link href={`/${country.alpha3Code.toLocaleLowerCase()}`}>
                <a className={styles.countryItem}>{country.name}</a>
              </Link>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default CountryList;
