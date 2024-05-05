import { useContext } from "react";
import { ContextAccounts } from "../../server/accounts";
import style from "../../styles/styleOfAccount.module.css";
import { Outlet, NavLink } from "react-router-dom";

const Account = () => {
const {account , setAccount} = useContext(ContextAccounts);

const clickOutAccount = () => {
    setAccount();
}

const styleLiNav = ({isActive}) => isActive ? {color: "yellow" , textDecoration: "none"} : {color: "red" , textDecoration: "none"} 

    return (
    <div id={style.container}>
        

        <div id={style.columnLeft}>
            <div id={style.header}>
            <ul>
                <li><NavLink style={styleLiNav} to='/account/yourProfile'>Ваш профиль</NavLink></li>
                <li><NavLink style={styleLiNav} to="/account/historyBuy">история покупок</NavLink></li>
                <li>баланс</li>
                <li>друзья</li>
            </ul>
            </div>

            <div id={style.footer}>
                <p><NavLink to="/main/about">На главную</NavLink></p>
                <p onClick={clickOutAccount}><NavLink to="/main">Выйти с аккаунта</NavLink></p>
                </div>
        
        </div>

        <div id={style.columnRight}><Outlet context={[account]}/></div>

    </div> 
    )
}

export default Account;