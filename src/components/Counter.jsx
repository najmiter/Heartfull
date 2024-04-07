import { useEffect } from "react";
import styles from "./Counter.module.css";

export default function Counter({ count }) {
    useEffect(
        function () {
            const counter = document.querySelector("." + styles.counter);

            counter.setAttribute("data-progress", count);

            counter.style.setProperty("--progress", `${count}%`);
            counter.style.setProperty(
                "--color",
                count === 100 ? "120, 100%, 25%" : "16, 100%, 50%"
            );
        },
        [count]
    );

    return <div data-progress={count} className={styles.counter}></div>;
}
