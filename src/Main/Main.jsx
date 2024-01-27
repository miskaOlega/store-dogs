import { useState } from "react";
import style from "../styles/styleOfMain.module.css"

const Main = () => {
const [dogRun , setDogRun] = useState("-100px");

    return (
        <>
        <header id={style.header}>

        <div style={{transform: `translateX(${dogRun})`}} id={style.dogRun}></div>
        </header>

        <article id={style.article}>

    
        <div className={style.columns} id={style.columnLeft}>

        <h1>Блог</h1>
        <ul>
            <li>О Жорике</li>
            <li>Новости</li>
            <li>Соц. сести</li>
            <li>Галере</li>
            <li>Дневник</li>
            <li>Мероприятия</li>
        </ul>

        </div>

        

        <div id={style.columnMidle}></div>





        <div className={style.columns} id={style.columnRight}>
            <h1>Магазин</h1>
            <ul>
                <li>Корма</li>
                <li>Одежды</li>
                <li>Ошейники</li>
                <li>Поводки</li>
            </ul>
        </div>

        </article>
        
        </>
    )
}

export default Main;