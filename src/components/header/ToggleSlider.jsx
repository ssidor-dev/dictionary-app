import styles from "./ToggleSlider.module.css";

import PropTypes from "prop-types";

/*
ToggleSlider component that returns a toggle slider for controlling light/dark mode
*/
export default function ToggleSlider({ toggle, onToggle }) {
  function handleToggle() {
    onToggle();
  }

  return (
    <form>
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggle"]}
        onChange={handleToggle}
        value={toggle}
      />
      <label
        htmlFor="toggle"
        className={toggle ? styles["label-active"] : styles["label"]}
      >
        <div className={toggle ? styles["ball-active"] : styles["ball"]}></div>
      </label>
    </form>
  );
}

ToggleSlider.propTypes = {
  toggle: PropTypes.bool,
  onToggle: PropTypes.func,
};
