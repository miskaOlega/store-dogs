import { useContext } from "react";
import { ContextAccounts } from "../../server/accounts";
import style from "../../styles/styleOfAccount.module.css";

const Account = () => {
const {account} = useContext(ContextAccounts);

    return (
    <div id={style.container}>

        <div id={style.columnLeft}>
            <ul>
                <li>Ваш профиль</li>
                <li>история покупок</li>
                <li>текст</li>
                <li>текст</li>
                <li>текст</li>
                <li>текст</li>
                <li>текст</li>
                
            </ul>
        </div>
        <div id={style.columnRight}></div>

    </div>  
    )
}

export default Account;