import { useForm } from "react-hook-form";
import style from "../styles/styleOfMenuForAccounts.module.css";

const MenuForAccounts = () => {

    const {handleSubmit , register} = useForm();
    const height = String(window.screen.height - window.screen.height*20/100) + "px";
    const width = String(window.screen.width - window.screen.width*1/100) + "px";
console.log(height);

    return (
        <div style={{width: width , height: height , margin: "0px 10px 0px 0px"}} id={style.menu}>
            <div id={style.form}>
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