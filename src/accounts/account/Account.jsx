import { useContext } from "react";
import { ContextAccounts } from "../../server/accounts";
import style from "../../styles/styleOfAccount.module.css";

const Account = () => {
const {account} = useContext(ContextAccounts);

    return (
    <div id={style.container}>

        <div id={style.columnLeft}></div>
        <div id={style.columnRight}></div>

    </div>  
    )
}

export default Account;