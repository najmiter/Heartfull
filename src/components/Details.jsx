/* eslint-disable react/prop-types */
import styles from "./Details.module.css";

export default function Details({ loop, target }) {
    return (
        <div className={styles.details}>
            <span className={styles.detailItem}>Loop: {loop}</span>
            <span className={styles.detailItem}>Target: {target}</span>
        </div>
    );
}
