import { useContext, useEffect, useMemo, useState } from "react";
import style from "../styles/styleOfMain.module.css"
import { NavLink, Outlet } from "react-router-dom";
import icon from "../styles/images/iconForAccount.png";
import {ContextAccounts} from '../server/accounts';

const Main = () => {
    const {account} = useContext(ContextAccounts);
    const [inAccountText , setInAccountText] = useState(<NavLink to="/menuForAccount">Войти в аккаунт</NavLink>);
    const [dogRun , setDogRun] = useState({transform: "translateX(-100px)"});

    useMemo(() => {
        if(account) {
            setInAccountText(account.name)
        }
    } , [account]);

    

    useEffect( () => {
        setTimeout(() => {
            if(dogRun.transform === "translateX(-100px)") {
            setDogRun({transform: `translateX(${window.screen.width + 100}px)` , transition: "15s transform linear"});
            } else {
                setDogRun({transform: "translateX(-100px)"})
            }
        } , 15000);
    } , [dogRun]);

    const active = ({isActive}) =>  isActive ? {color: "red" , fontSize: "110%"} : {color: "black"};

    return (
        <>
        <div id={style.strokeAccount}>
        <div id={style.containerAccount}>
        <div style={{backgroundImage: `url(${icon})` }} id={style.circleAccount}></div>
        <div id={style.textAccount}><p>{inAccountText}</p></div>


        </div>

        </div>

        <header id={style.header}>
        <div style={dogRun} id={style.dogRun}></div>
        </header>

        <article id={style.article}>

    
        <div className={style.columns} id={style.columnLeft}>
        
        <h1>Блог</h1>
        <ul>
            <li><NavLink className={style.navlink} style={active} to="about">О Жорике</NavLink></li>
            <li><NavLink className={style.navlink} style={active} to="news">Новости</NavLink></li>
            <li><NavLink className={style.navlink} style={active} to="social">Соц. сести</NavLink></li>
            <li><NavLink className={style.navlink} style={active} to="foto">Галерея</NavLink></li>
            <li><NavLink className={style.navlink} style={active} to="games">Розыгрыши</NavLink></li>
        </ul>
        
        </div>

        

        <div id={style.columnMidle}><Outlet /></div>





        <div className={style.columns} id={style.columnRight}>
            <h1>Магазин</h1>
            <ul>
                <li><NavLink className={style.navlink} style={active} to="dogFood">Еда для собак</NavLink></li>
                <li><NavLink className={style.navlink} style={active} to="clothes">Одежки</NavLink></li>
                <li><NavLink className={style.navlink} style={active} to="collar">Ошейники</NavLink></li>
                <li><NavLink className={style.navlink} style={active} to="leash">Поводки</NavLink></li>
            </ul>
        </div>

        </article>
     
        </>
    )
}

export default Main