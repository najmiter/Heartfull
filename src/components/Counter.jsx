/* eslint-disable react/prop-types */
import styles from "./Counter.module.css";

export default function Counter({ count }) {
    return <div className={styles.counter}>{count}</div>;
}
