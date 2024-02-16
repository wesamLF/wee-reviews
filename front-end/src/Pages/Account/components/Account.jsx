import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./account.css"
import LogOut from '../../../components/LogOut/LogOut'

const Account = () => {



    return (
        <div className="container ">
            <div className='columns account-container mx-0 my-6 '>
                <div className="column dark--bg--color is-one-quarter  is-flex-direction-column is-flex is-justify-content-space-between p-5">
                    <div className="is-flex is-flex-direction-column ">
                        <NavLink to={"./myreviews"} className="is-clickable p-5 mb-1 light--text--color ">
                            My reviews
                        </NavLink>
                        <NavLink to={"./myorders"} className="is-clickable p-5 mb-1 light--text--color ">
                            My Orders
                        </NavLink>
                        <NavLink to={"./settings"} className="is-clickable p-5 mb-1 light--text--color" >
                            Settings
                        </NavLink>
                    </div>

                    <LogOut />

                </div>
                <div className="column account-body">
                    <Outlet />


                </div>
            </div>
        </div>
    )
}

export default Account