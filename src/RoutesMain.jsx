import { Routes , Route } from "react-router-dom";
import Reload from "./Reload.js";
import Main from "./Main/Main.jsx"

const RoutesMain = () => {

    return (
        <>
        <Routes>
        <Route path="/" element={<Reload />}/>
        <Route path="/main" element={<Main />} />
        </Routes>
        </>
    )
}

export default RoutesMain