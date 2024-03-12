import { NavLink } from "react-router-dom";
import style from "./styleAbout.module.css"

const About = () => {
    return (
        <>
        <div id={style.about}>
            <div id={style.text}>
                    
                    <h1>О Жорике</h1>
                    <div>
                    <p>Жорик, ну или <em>Жетем Ляви</em>, родился 23 февраля 2014 года в городе Витебске.
                    Для него было неожиданностью, когда он узнал, что будет проживать с людьми, а не с 
                    родной матерью, однако ему не помешалосоздать свой бизнесс и обзавестись популярностью.
                    </p>

                    <p>По сегодняшний день Жорик ведёт партнёрские отношения с такими брендами, как Royal CANIN, 
                    CHAPPI, PURINA ONE и с другими крупными брендами для собак.</p> 
                    
                    <p id={style.bottom_p}>Если хотите, то вы можете узнать
                    о Жорике в его <NavLink to="/main/social">соц. сетях</NavLink></p>
                    </div>
            </div>
            <div id={style.image}><img src="/imagesForImg/ramkaJorik.png" alt="фото Жорика"/></div>
        </div>
        </>
    )
}

export default About;