/* eslint-disable react/prop-types */
import styles from "./Settings.module.css";

export default function Settings({
    target,
    setTarget,
    settingsActive,
    setSettingsActive,
    setQalma,
    initialQalmas,
    resetLocalStorage,
}) {
    function handleSetTarget(e) {
        const newTarget = +e.target.value;
        localStorage.setItem("heartfull_TARGET", newTarget);
        setTarget(newTarget);
    }

    function resetEverything_localStorage() {
        const ok = confirm("This will remove all of your data permanently!");
        if (ok) {
            resetLocalStorage();
            setQalma(initialQalmas[new Date().getDay()]);
            setTarget(initialQalmas.target);
        }
    }

    return (
        <div
            className={`${styles.settings} ${settingsActive ? styles.settingsActive : ""}`}
        >
            <div
                onMouseDown={() => setSettingsActive(!settingsActive)}
                className={styles.tundu}
            ></div>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsItem}>
                    <label htmlFor="target">Target</label>
                    <input
                        onChange={handleSetTarget}
                        type="number"
                        id="target"
                        value={target}
                    />
                </div>
                <div className={styles.settingsItem}>
                    Swipe right ⏯ to go back
                </div>
                <div className={styles.settingsItem}>
                    <button onClick={resetEverything_localStorage}>
                        Reset Everything
                    </button>
                </div>
            </div>
        </div>
    );
}
