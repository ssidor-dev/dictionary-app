import PropTypes from "prop-types";
import styles from "./DefinitionContainer.module.css";

/*
UI component DefinitionContainer that takes in prop children and holds the Definition focused components
*/
export default function DefinitionContainer({ children }) {
  return <div className={styles["definition-container"]}>{children}</div>;
}

DefinitionContainer.propTypes = {
  children: PropTypes.node,
};
