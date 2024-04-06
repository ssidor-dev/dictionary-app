import styles from "./MainContainer.module.css";
import PropTypes from "prop-types";

/*
 UI component MainContainer that takes the children prop and acts as the main container for the app
*/

export default function MainContainer({ children }) {
  return <main className={styles["main"]}>{children}</main>;
}

MainContainer.propTypes = {
  children: PropTypes.node,
};
