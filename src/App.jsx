import { useState } from "react";
import Counter from "./components/Counter";
import Home from "./components/Home";

export default function App() {
    const [count, setCount] = useState(0);

    function handleSetCount() {
        setCount(count + 1);
    }

    return (
        <Home onClick={handleSetCount}>
            <Counter count={count} />
        </Home>
    );
}
