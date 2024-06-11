import { useOutletContext } from "react-router-dom";

const YourProfile = () => {
    const [account] = useOutletContext();
    return (
        <>
        {account.name}
        </>
    )
}

export default YourProfile;