import PropTypes from "prop-types";
import styles from "./DefinitionFooter.module.css";

/*
 DefinitionFooter component that returns the API definition source based on the definitionData prop tha is passed in
*/
export default function DefinitionFooter({ definitionData }) {
  return (
    <footer className={styles["definition-footer"]}>
      <div className={styles["line-divider"]}></div>
      <p className={styles["source-label"]}>Source</p>
      <a
        href={definitionData.sourceUrls[0]}
        target="_blank"
        className={styles["source"]}
      >
        <p>{definitionData.sourceUrls[0]}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            fill="none"
            stroke="#838383"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
          />
        </svg>
      </a>
    </footer>
  );
}

DefinitionFooter.propTypes = {
  definitionData: PropTypes.array,
};
