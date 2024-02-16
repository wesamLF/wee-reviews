import React from 'react'
import { useUserContext } from '../context/UserContext'
import { Outlet, Navigate } from "react-router-dom";
import ToastError from '../Util/ToastError';
const PrivateRoutes = () => {

    const { userInfo } = useUserContext()
    if(!userInfo){
         ToastError("please log in first!")
    }
    return (
        userInfo ? <Outlet />:<Navigate to={"./home"} />
    )
}

export default PrivateRoutes