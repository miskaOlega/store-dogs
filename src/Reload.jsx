
import { useEffect, useMemo, useState } from "react"
import style from "./styles/styleOfReload.module.css"


const Reload = () => {
    const [state , setState] = useState(<p>ok</p>)
    useEffect(() => {
        const time = setTimeout(() => {setState(state => state + <p>ok</p>)} , 1000);
        
    } , [state])

    


    
    return (
        <>

        <header id={style.header}>

        <div id={style.dogJorik}></div>
        {state}
        </header>

        <footer id={style.footer}>


        </footer>
        
        </>
    )
}

export default Reload