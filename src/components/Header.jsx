/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

const today = new Date();
const formatting = {
    day: "2-digit",
    month: "long",
    year: "numeric",
};

export default function Header({ handelSetSliderOn }) {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navItems}>
                    <li onClick={handelSetSliderOn}>Stats</li>
                    <li>{today.toLocaleDateString("en-us", formatting)}</li>
                </ul>
            </nav>
        </header>
    );
}
