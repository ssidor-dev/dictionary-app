import Logo from "./Logo";
import ToggleSlider from "./ToggleSlider";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

export default function Header({toggle, onToggle}) {
  return (
    <header className={styles["header"]}>
      <Logo />

      <div className={styles["control-container"]}>
        <ToggleSlider toggle={toggle} onToggle={onToggle} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
  
        >
          <path
            fill="none"
            stroke="#838383"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            id="dark"
          />
        </svg>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggle: PropTypes.bool,
  onToggle: PropTypes.func
}
