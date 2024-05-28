/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Main.module.css";

export default function Main({ handleMainClick, children }) {
    const [x, setX] = useState(0);

    function handleTouchStart(e) {
        setX(e.touches[0].clientX);
    }

    function handleTouchEnd(e) {
        const swipeLength = 70;
        const endX = e.changedTouches[0].clientX;

        if (endX === x) return;

        const by = x - endX < -swipeLength ? -1 : 1;

        handleMainClick(by);
    }

    return (
        <main
            // onClick={() => handleMainClick(1)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={styles.main}
        >
            {children}
        </main>
    );
}
