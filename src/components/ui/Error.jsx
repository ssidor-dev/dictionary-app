import PropTypes from "prop-types";
import styles from "./Error.module.css";

/*
 Error component that renders the error message when the user requested word is not found in the API request
*/

export default function Error({ message, query }) {
  return (
    <div className={styles["error-container"]}>
      <div>🙁</div>
      <p>{message}</p>
      <span>{query}</span>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
  query: PropTypes.string
};
