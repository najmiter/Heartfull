import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Counter from "./components/Counter";

export default function App() {
    const [sliderOn, setSliderOn] = useState(false);

    function handelSetSliderOn() {
        setSliderOn((flag) => !flag);
    }

    return (
        <>
            <Header handelSetSliderOn={handelSetSliderOn} />
            <Main>
                <Counter />
            </Main>
            <Slider sliderOn={sliderOn} handelSetSliderOn={handelSetSliderOn} />
        </>
    );
}
