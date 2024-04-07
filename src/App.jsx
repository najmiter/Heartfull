import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import Qalma from "./components/Qalma";
import Details from "./components/Details";

export default function App() {
    const [count, setCount] = useState(0);
    const [sliderOn, setSliderOn] = useState(false);
    const [qalma, setQalma] = useState("");
    const [loop, setLoop] = useState(0);
    const [target, setTarget] = useState(100);

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

    function handleMainClick() {
        setCount((count % target) + 1);

        if ((count + 1) % target === 0) {
            setLoop(loop + 1);
        }
    }

    return (
        <>
            <Header handelSetSliderOn={handelSetSliderOn} />
            <Main handleMainClick={handleMainClick}>
                <Qalma qalma={qalma} />
                <Counter count={count} />
                <Details loop={loop} target={target} />
            </Main>
            <Slider sliderOn={sliderOn} handelSetSliderOn={handelSetSliderOn} />
        </>
    );
}
