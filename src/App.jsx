import { useState } from "react";
import Layout from "./components/Layout";

export default function App() {
    const [count, setCount] = useState(0);

    function handleSetCount() {
        setCount(count + 1);
    }

    return <Layout onClick={handleSetCount}></Layout>;
}
