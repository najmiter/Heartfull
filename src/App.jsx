import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import Qalma from "./components/Qalma";
import Details from "./components/Details";
import Settings from "./components/Settings";

export default function App() {
    const [sliderOn, setSliderOn] = useState(false);
    const [qalma, setQalma] = useState(null);
    const [target, setTarget] = useState(100);

    function handelSetSliderOn() {
        setSliderOn((flag) => !flag);
    }

    useEffect(function () {
        const thisDay = new Date().getDay();
        const realFakeAPI = `heartfull_DAY/${thisDay}`;
        const local = localStorage.getItem(realFakeAPI);

        if (local) {
            setQalma(JSON.parse(local));
            setTarget(
                JSON.parse(localStorage.getItem("heartfull_TARGET")) ?? 100
            );
        } else {
            (async function () {
                fetch("qalmas.json")
                    .then((jwb) => jwb.json())
                    .then((qalmas) => {
                        setQalma(qalmas[thisDay]);
                        setTarget(+qalmas?.target);
                        localStorage.setItem(
                            "heartfull_TARGET",
                            qalmas?.target
                        );
                    });
            })();
        }
    }, []);

    function handleMainClick() {
        const thisDay = new Date().getDay();
        const realFakeAPI = `heartfull_DAY/${thisDay}`;

        setQalma((qalma) => {
            const latestQalma = {
                ...qalma,
                count: (qalma.count % target) + 1,
                loop: qalma.loop + Number((qalma.count + 1) % target === 0),
            };

            localStorage.setItem(realFakeAPI, JSON.stringify(latestQalma));

            return latestQalma;
        });
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
            <Slider sliderOn={sliderOn} handelSetSliderOn={handelSetSliderOn} />
            <Settings target={target} setTarget={setTarget} />
        </>
    );
}
