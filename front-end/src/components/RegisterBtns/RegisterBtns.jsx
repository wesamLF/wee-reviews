import React from 'react'
import "./registerBtns.css"
import { useUserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import UserIcon from '../UserIcon/UserIcon';
const RegisterBtns = () => {
    const { userInfo } = useUserContext()
    

    const IsLoggedIn = () => {
        if (userInfo === null) {
            return (
                <>
                    <NavLink to={"./register/login"} className="register-btn button is-outlined is-light light--text--color  mr-2">
                        Log in
                    </NavLink >
                    <NavLink to={"./register/signin"} className="register-btn button is-outlined light--text--color  is-light">
                        Sign up
                    </NavLink >
                </>)
        } else {
            return (
                <>
                    <UserIcon />
                    
                </>)
        }
    }

    return (
        <IsLoggedIn />
    )
}

export default RegisterBtns