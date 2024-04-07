import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import Qalma from "./components/Qalma";

export default function App() {
    const [count, setCount] = useState(0);
    const [sliderOn, setSliderOn] = useState(false);
    const [qalma, setQalma] = useState("");

    function handelSetSliderOn() {
        setSliderOn((flag) => !flag);
    }

    useEffect(function () {
        (async function () {
            fetch("qalmas.json")
                .then((jwb) => jwb.json())
                .then((qalmas) => setQalma(qalmas[new Date().getDay()]));
        })();
    }, []);

    function handleSetCount() {
        setCount((count % 100) + 1);
    }

    return (
        <>
            <Header handelSetSliderOn={handelSetSliderOn} />
            <Main handleSetCount={handleSetCount}>
                <Qalma qalma={qalma} />
                <Counter count={count} />
            </Main>
            <Slider sliderOn={sliderOn} handelSetSliderOn={handelSetSliderOn} />
        </>
    );
}
