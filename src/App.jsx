import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import Qalma from "./components/Qalma";
import Details from "./components/Details";
import Settings from "./components/Settings";

const initialQalmas = {
    0: {
        qalma: "یَا ذَو الْجَلَالِ وَالْإِكْرَامِ",
        count: 0,
        loop: 0,
    },
    1: { qalma: "یَا قَاضی الحَاجَاتْ", count: 0, loop: 0 },
    2: { qalma: "يَا أَرْحَمَ الرَّاحِمِيْنَ", count: 0, loop: 0 },
    3: { qalma: "یَا حیُّی یَا قَیُّوم", count: 0, loop: 0 },
    4: {
        qalma: "لَا إِلَهَ إِلَّا اللَّهُ الْمَلِكُ الْحَقُّ الْمُبِينُ",
        count: 0,
        loop: 0,
    },
    5: {
        qalma: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
        count: 0,
        loop: 0,
    },
    6: { qalma: "يَا رَبِّ العَالَمِيْنَ", count: 0, loop: 0 },
    target: 100,
};

export default function App() {
    const [sliderOn, setSliderOn] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);
    const [qalma, setQalma] = useState(null);
    const [target, setTarget] = useState(100);

    function handelSetSliderOn() {
        setSliderOn((flag) => !flag);
    }

    useEffect(function () {
        if (!localStorage.getItem("heartfull_ISFIRSTTIME")) {
            resetLocalStorage();
            localStorage.setItem("heartfull_ISFIRSTTIME", "false");
        }

        const thisDay = new Date().getDay();
        const realFakeAPI = `heartfull_DAY/${thisDay}`;
        const local = localStorage.getItem(realFakeAPI);

        if (local) {
            setQalma(JSON.parse(local));
            setTarget(
                JSON.parse(localStorage.getItem("heartfull_TARGET")) ?? 100
            );
        } else {
            setQalma(initialQalmas[thisDay]);
            setTarget(initialQalmas.target);
            localStorage.setItem("heartfull_TARGET", initialQalmas.target);
        }
    }, []);

    function handleMainClick(data = 1) {
        if (sliderOn) setSliderOn(false);
        if (settingsActive) setSettingsActive(false);
        else if (!settingsActive && !sliderOn) {
            const thisDay = new Date().getDay();
            const realFakeAPI = `heartfull_DAY/${thisDay}`;

            setQalma((qalma) => {
                const latestQalma = {
                    ...qalma,
                    count:
                        (qalma.count % target) + data >= 0
                            ? (qalma.count % target) + data
                            : 0,
                    loop:
                        qalma.loop +
                        Number((qalma.count + data) % target === 0 && data > 0),
                };

                localStorage.setItem(realFakeAPI, JSON.stringify(latestQalma));

                return latestQalma;
            });
        }
    }

    function resetLocalStorage() {
        [0, 1, 2, 3, 4, 5, 6].forEach((d) =>
            localStorage.setItem(
                `heartfull_DAY/${d}`,
                JSON.stringify(initialQalmas[d])
            )
        );

        localStorage.setItem("heartfull_TARGET", initialQalmas.target);
    }

    return (
        <>
            <Header handelSetSliderOn={handelSetSliderOn} />
            <Main handleMainClick={handleMainClick}>
                <Qalma qalma={qalma} />
                <Counter
                    count={(qalma?.count ?? 0) % (target + 1)}
                    target={target}
                />
                <Details loop={qalma?.loop ?? 0} target={target} />
            </Main>
            <Slider
                sliderOn={sliderOn}
                handelSetSliderOn={handelSetSliderOn}
                initialQalmas={initialQalmas}
            />
            <Settings
                target={target}
                setTarget={setTarget}
                settingsActive={settingsActive}
                setSettingsActive={setSettingsActive}
                setQalma={setQalma}
                initialQalmas={initialQalmas}
                resetLocalStorage={resetLocalStorage}
            />
        </>
    );
}
