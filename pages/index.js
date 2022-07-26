import styles from "../styles/Home.module.css";
import CountryList from "../Components/CountryList";
import SearchBox from "../Components/SearchBox";
import { useEffect, useState } from "react";

export default function Home({ countries }) {
  const [searchValue, setSearchValue] = useState("");
  const [countryList, setCountryList] = useState(countries);
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setCountryList(
      countries.filter((country) => {
        const [countryLang] = country.languages;

        return (
          country.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          countryLang.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        );
      })
    );
  }, [searchValue]);

  return (
    <div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Country Search</h1>
        <p className={styles.description}>
          An open-source directory of every country in the world.
        </p>
      </div>
      <SearchBox value={searchValue} onChange={searchHandler} />
      <CountryList
        countries={countries}
        searchValue={searchValue}
        countryList={countryList}
      />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();

  return {
    props: {
      countries: await data,
    },
  };
}
