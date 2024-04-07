import styles from "./Slider.module.css";

export default function Slider({ sliderOn, handelSetSliderOn }) {
    return (
        <div
            className={`${styles.slider} ${sliderOn ? styles.sliderOn : styles.sliderOff}`}
        >
            slider
            <span onClick={handelSetSliderOn}>&larr; back</span>
        </div>
    );
}
