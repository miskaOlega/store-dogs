import { useForm } from "react-hook-form";
import style from "../styles/styleOfMenuForAccounts.module.css";

const MenuForAccounts = () => {

    const {handleSubmit , register} = useForm();
    const height = String(window.screen.height - window.screen.height*14/100) + "px";
    const width = String(window.screen.width - window.screen.width*1/100) + "px";
console.log(height);

    return (
        <div style={{width: width , height: height}} id={style.menu}>
            <div id={style.form}>
                <h1>Окно Входа</h1>
        <form>
            <input type="text" placeholder="Введите логин"/> <br />
            <input type="password" placeholder="Введите пароль" /> <br />
            <input type="mail" placeholder="Введите свою почту" />
        </form>
        </div>
        </div>
    )
}

export default MenuForAccounts;