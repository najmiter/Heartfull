/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Slider from "./Slider";

export default function Home() {
    const [sliderOn, setSliderOn] = useState(false);

    function handelSetSliderOn() {
        setSliderOn((flag) => !flag);
    }

    return (
        <>
            <Header handelSetSliderOn={handelSetSliderOn} />
            <Main />
            <Slider sliderOn={sliderOn} handelSetSliderOn={handelSetSliderOn} />
        </>
    );
}
