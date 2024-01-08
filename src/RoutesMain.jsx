import { Routes , Route } from "react-router-dom";
import Reload from "./Reload.js";

const RoutesMain = () => {

    return (
        <>
        <Routes>
        <Route path="/" element={<Reload />}/>
        </Routes>
        </>
    )
}

export default RoutesMain