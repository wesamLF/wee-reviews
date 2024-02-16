import React from 'react'
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../context/UserContext";
import ToastSuccess from '../../Util/ToastSuccess';
const LogOut = () => {
    const navigate = useNavigate()
    const { setUserInfo } = useUserContext()
    const LogOut = () => {
        setUserInfo(null)
        localStorage.removeItem("userInfo")
        ToastSuccess("Logout successfully!")
        navigate("../home")
        
    }
    return (
        <button className="button is-danger"
            onClick={LogOut}>
            Log Out
        </button >)
}

export default LogOut