import { useForm } from "react-hook-form";
import style from "../styles/styleOfMenuForAccounts.module.css";
import {ContextAccounts} from "../server/accounts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MenuForAccounts = () => {
   const {serv , setAccount} = useContext(ContextAccounts);
   const navigate = useNavigate()

    const {handleSubmit , register , formState: {errors}} = useForm();


    const submitForm = date => {
        const nick = serv.find(i => i.name === date.name);
        if(date.name === "AdminJorik" && date.password === "Admin123" && date.mail === "none") {
            navigate("/Admin");
        } else if(nick) {
        if(nick.password === date.password && nick.mail === date.mail) {
            console.log(true);
            setAccount(date)
            navigate("/account")
        } else {
            console.log(false)
        }
    } else {
        console.log("Nick not")
    }
    };




    return (
        <div id={style.menu}>
            <div id={style.form}>
                <h1>Окно Входа</h1>
        <form onSubmit={handleSubmit(submitForm)}>
            <input {...register("name" , {required: {value: true , message: "Введите имя пользователя"}})} type="text" placeholder="Введите логин"/> <br />
            {errors.name ? <p>{errors.name.message}</p> : <p></p>}
            <input {...register("password" , {required: {value: true , message: "Введите пароль"}})} type="password" placeholder="Введите пароль" /> <br />
            {errors.password ? <p>{errors.password.message}</p> : <p></p>}
            <input {...register("mail" , {required: {value: true , message: "Введите электронную почту"}})} type="mail" placeholder="Введите свою почту" /><br />
            {errors.mail ? <p>{errors.mail.message}</p> : <p></p>}
            <button>Войти</button>

        </form>
        </div>
        </div>
    )
}

export default MenuForAccounts;