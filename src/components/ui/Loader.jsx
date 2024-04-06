import styles from "./Loader.module.css";

/*
 Loader component that returns a simple loading screen to the user
*/
export default function Loader() {
    return <p className={styles.loader}>Loading...</p>
}