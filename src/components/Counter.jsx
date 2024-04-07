import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(99);
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

    function handleSetCount() {
        setCount((count % 100) + 1);
    }

    return (
        <div
            onClick={handleSetCount}
            data-progress={count}
            className={styles.counter}
        ></div>
    );
}
