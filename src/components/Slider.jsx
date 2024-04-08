/* eslint-disable react/prop-types */
import styles from "./Slider.module.css";

export default function Slider({ sliderOn, handelSetSliderOn }) {
    const today = new Date().getDay();

    return (
        <div
            className={`${styles.slider} ${sliderOn ? styles.sliderOn : styles.sliderOff}`}
        >
            <div className={styles.sliderHeader}>
                History
                <span onClick={handelSetSliderOn}>&larr; back</span>
            </div>

            <div className={styles.history}>
                <div className={styles.historyHeader}>
                    <span>L</span>
                    <span>C</span>
                    <span style={{ textAlign: "right" }}>Qalma</span>
                </div>
                {[0, 1, 2, 3, 4, 5, 6].map((d) => {
                    const qalma = JSON.parse(
                        localStorage.getItem(`heartfull_DAY/${d}`)
                    );

                    return (
                        <div
                            className={`${styles.historyItem} ${today === d ? styles.active : ""}`}
                            key={d}
                        >
                            <span className="">{qalma?.loop}</span>
                            <span className="">{qalma?.count}</span>
                            <span className={styles.qalma}>{qalma?.qalma}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
