import { useEffect } from "react";
import styles from "./Counter.module.css";

export default function Counter({ count, target }) {
    useEffect(
        function () {
            const counter = document.querySelector("." + styles.counter);

            counter.setAttribute("data-progress", count);

            counter.style.setProperty(
                "--progress",
                `${(count / target) * 100}%`
            );
            counter.style.setProperty(
                "--color",
                count === target ? "120, 100%, 25%" : "16, 100%, 50%"
            );
        },
        [count, target]
    );

    return <div data-progress={count} className={styles.counter}></div>;
}
