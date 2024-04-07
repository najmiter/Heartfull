/* eslint-disable react/prop-types */
import styles from "./Main.module.css";

export default function Main({ handleSetCount, children }) {
    return (
        <main onClick={handleSetCount} className={styles.main}>
            {children}
        </main>
    );
}
