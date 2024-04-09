/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

const today = new Date();
const formatting = {
    weekday: "long",
};

export default function Header({ handelSetSliderOn }) {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navItems}>
                    <li onClick={handelSetSliderOn}>
                        <div className={styles.burger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                    <li>{today.toLocaleDateString("en-US", formatting)}</li>
                </ul>
            </nav>
        </header>
    );
}
