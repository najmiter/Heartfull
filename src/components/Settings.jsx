import { useState } from "react";
import styles from "./Settings.module.css";

export default function Settings({ target, setTarget }) {
    const [settingsActive, setSettingsActive] = useState(false);

    return (
        <div
            className={`${styles.settings} ${settingsActive ? styles.settingsActive : ""}`}
        >
            <div
                onClick={() => setSettingsActive(!settingsActive)}
                className={styles.tundu}
            ></div>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsItem}>
                    <label htmlFor="target">Target</label>
                    <input
                        onChange={(e) => setTarget(+e.target.value)}
                        type="number"
                        id="target"
                        value={target}
                    />
                </div>
            </div>
        </div>
    );
}
