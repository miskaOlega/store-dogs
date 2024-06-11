import { useForm } from "react-hook-form";
import style from "../styles/styleOfMenuForAccounts.module.css";
import {ContextAccounts} from "../server/accounts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuForAccounts = () => {
   const {serv , setAccount} = useContext(ContextAccounts);
   const navigate = useNavigate();
   const [errorsAccaunt , setErrorsAccaunt] = useState({
    password: "",
    mail: ""
   })

    const {handleSubmit , register , formState: {errors}} = useForm();


    const submitForm = date => {
        const nick = serv.find(i => i.name === date.name);
        if(nick) {
        if(nick.password === date.password && nick.mail === date.mail) {
            setErrorsAccaunt({password: "", mail: ""});
            setAccount(date);
            navigate("/account/yourProfile");
        } else if(nick.password !== date.password && nick.mail !== date.mail) {
            errorsAccaunt.password = "Неверный пароль";
            errorsAccaunt.mail = "Неверный электронный почтовый ящик";
        } else if (nick.password !== date.password) {
            errorsAccaunt.mail = "";
            errorsAccaunt.password = "Неверный пароль";
        } else if(nick.mail !== date.mail) {
            errorsAccaunt.password = "";
            errorsAccaunt.mail = "Неверный электронный почтовый ящик";
        }
    }
    };




    return (
        <div id={style.menu}>
            <div id={style.form}>
                <h1>Окно Входа</h1>
        <form onSubmit={handleSubmit(submitForm)}>
            <input {...register("name" , {required: {value: true , message: "Введите имя пользователя"}})} type="text" placeholder="Введите логин"/> <br />
            {errors.name ? <p>{errors.name.message}</p> : ""}
            <input {...register("password" , {required: {value: true , message: "Введите пароль"}})} type="password" placeholder="Введите пароль" /> <br />
            {errors.password ? <p>{errors.password.message}</p> : ""}{errorsAccaunt.password ? <p>{errorsAccaunt.password}</p> : ""}
            <input {...register("mail" , {required: {value: true , message: "Введите электронную почту"}})} type="mail" placeholder="Введите свою почту" /><br />
            {errors.mail ? <p>{errors.mail.message}</p> : ""}{errorsAccaunt.mail ? <p>{errorsAccaunt.mail}</p> : ""}
            <button>Войти</button>

        </form>
        </div>
        </div>
    )
}

export default MenuForAccounts;