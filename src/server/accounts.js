import {createContext, useMemo, useState } from "react";
import axios from "axios";

export const ContextAccounts = createContext();

const Context = ({children}) => {
    const [serv , setServ] = useState();
    const [account , setAccount] = useState();
    const jsons = async () => {
        const ss = await axios.get("http://localhost:3001/accounts");
        setServ(ss.data);
    }

    useMemo(() => {
jsons()
    } , [])
    return (
        <>
        <ContextAccounts.Provider value={{serv , setServ , account , setAccount}}>{children}</ContextAccounts.Provider>
        </>
    )
}

export default Context;