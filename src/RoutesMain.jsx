import { Routes , Route } from "react-router-dom";
import Reload from "./Reload.jsx";
import Main from "./Main/Main.jsx"
import News from "./Main/news/News.jsx";
import About from "./Main/about/About.jsx";
import Social from "./Main/social/social.jsx";
import Foto from "./Main/foto/foto.jsx";
import Games from "./Main/games/games.jsx";
import DogFood from "./Main/dogFood/dogFood.jsx";
import Clothes from "./Main/clothes/clothes.jsx";
import Collar from "./Main/collar/collar.jsx";
import Leash from "./Main/leash/leash.jsx";
import MenuForAccounts from "./accounts/MenuForAccounts.jsx";
import Admin from "./accounts/admin/Admin.jsx";
const RoutesMain = () => {

    return (
        <>
        <Routes>
        <Route path="/" element={<Reload />}/>
        <Route path="/main" element={<Main />}>
            <Route path="news" element={<News />} />
            <Route path="about" element={<About/>} />
            <Route path="social" element={<Social />} />
            <Route path="foto" element={<Foto />} />
            <Route path="games" element={<Games />} />
            <Route path="dogFood" element={<DogFood />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="collar" element={<Collar />} />
            <Route path="leash" element={<Leash />} />
         </Route>
         <Route path="/menuForAccount" element={<MenuForAccounts />}/>
         <Route path="/Admin" element={<Admin />} />
        </Routes>
        </>
    )
}

export default RoutesMain