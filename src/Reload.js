import style from "./styles/styleOfReload.module.css";
import React, { useEffect , useState } from "react";

const Reload = () => {
    const [opacity , setOpacity] = useState(["opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)" , "opacity(0%)"]);
    const [lapki , setLapki] = useState([]);
    const [i , setI] = useState(0);
    const [g , setG] = useState(0);
    useEffect(() => {
        if(i <= 8) {
            lapki[i] = {styleLapkiId: style.lapki , id: i};
            setI(i + 1);
        };
        console.log(i , lapki)
    } , [i]);

    useEffect(() => {
        const time = setTimeout(() => {
            if(g <=8) {
                setG(g + 1);
                opacity[g] = "opacity(100)";
            } else {
                clearTimeout(time);
            }
        } , 1100);
    } , [g]);

    
    return (
        <>

        <header id={style.header}>

        <div id={style.dogJorik}></div>


        <div id={style.ourLapki}>
        
        {lapki.map((i , id) => <div style={{filter: opacity[id]}} key={i.id} id={i.styleLapkiId}></div>)}

        </div>
        
        </header>

        <footer id={style.footer}>

        <p id={style.textInFooter}>Loading</p>

        </footer>
        
        </>
    )
}

export default Reload