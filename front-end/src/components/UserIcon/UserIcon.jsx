import React, { useState } from 'react'
import { AccountCircle, KeyboardArrowUp } from "@material-ui/icons"
import './userIcon.css'
import { NavLink } from 'react-router-dom'
import LogOut from '../LogOut/LogOut'
const UserIcon = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={`dropdown is-right ${isActive ? "is-active is-active-style" : ""}`} onClick={() => setIsActive(!isActive)}>
            <div className="account-icons-holder dropdown-trigger is-clickable light--text--color is-flex is-align-cdontent-center">
                <AccountCircle className='account-circle is-size-3' />
                <KeyboardArrowUp className='keyboard-arrow-up light--text--color' />
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <NavLink to={"../../account/myreviews"} href="#" className="dropdown-item">
                        My Reviews
                    </NavLink>
                    <NavLink to={"../../account/myorders"} href="#" className="dropdown-item">
                        My Orders
                    </NavLink>
                    <NavLink to={"../../../account/settings"} href="#" className="dropdown-item">
                        Setting
                    </NavLink>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                        <LogOut />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserIcon