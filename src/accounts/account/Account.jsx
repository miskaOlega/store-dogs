import { useContext } from "react";
import { ContextAccounts } from "../../server/accounts";
import style from "../../styles/styleOfAccount.module.css";
import { Outlet, NavLink } from "react-router-dom";

const Account = () => {
const {account} = useContext(ContextAccounts);

    return (
    <div id={style.container}>
        

        <div id={style.columnLeft}>
            <div id={style.header}>
            <ul>
                <li><NavLink to='/account/yourProfile'>Ваш профиль</NavLink></li>
                <li>история покупок</li>
                <li>баланс</li>
                <li>друзья</li>
            </ul>
            </div>

            <div id={style.footer}>
                <p><NavLink to="/main/about">На главную</NavLink></p>
                </div>
        
        </div>

        <div id={style.columnRight}><Outlet context={[account]}/></div>

    </div> 
    )
}

export default Account;