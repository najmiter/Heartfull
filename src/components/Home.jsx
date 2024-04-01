/* eslint-disable react/prop-types */
import styles from "./Home.module.css";

export default function Home({ onClick, children }) {
    return (
        <main onClick={onClick} className={styles.main}>
            {children}
        </main>
    );
}
