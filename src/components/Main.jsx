/* eslint-disable react/prop-types */
import styles from "./Main.module.css";

export default function Main({ handleMainClick, children }) {
    return (
        <main onClick={handleMainClick} className={styles.main}>
            {children}
        </main>
    );
}
