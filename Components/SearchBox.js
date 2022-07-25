import React from "react";
import styles from "../styles/SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search countries..."
        value={value}
        onChange={onChange}
        className={styles.inputBar}
      />
    </form>
  );
};

export default SearchBox;
