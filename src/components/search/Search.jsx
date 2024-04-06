import styles from "./Search.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Search({ onSearch }) {
  //using inputValue and setInputValue state to control input element locally in the Search component
  const [inputValue, setInputValue] = useState("");
  //using isValid and errorMsg state to handle the case where the user tries to submit an empty search
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue === "") {
      setIsValid(false);
      setErrorMsg("Whoops, can't be empty...");
    } else {
      setIsValid(true);
      setErrorMsg("");
      onSearch(inputValue);
      setInputValue("");
    }
  }
  return (
    <>
      <form action="" className={styles["search-form"]} id="dark">
        <label htmlFor="search-query" className={styles["search-label"]}>
          <input
            type="text"
            id="search-query"
            className={
              !isValid
                ? cx(styles["error-search-validation"], styles["search-input"])
                : styles["search-input"]
            }
            onChange={handleInput}
            value={inputValue}
            placeholder="Search for any word..."
          />
        </label>

        <button className={styles["search-btn"]} onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </form>
      {!isValid ? (
        <p className={styles["error-search-validation"]}>{errorMsg}</p>
      ) : (
        ""
      )}
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
