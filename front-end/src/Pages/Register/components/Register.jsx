import React from 'react'
import { Outlet } from 'react-router-dom';
import "./register.css"
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className='is-flex is-justify-content-center mt-6 '>
      <div className="register-body is-flex is-flex-direction-column has-background-white ">
        <div className='is-full is-flex'>

          <NavLink to={"../register/login"}
            className="register-btn  has-text-centered py-2"
          >Log in</NavLink>


          <NavLink to={"../register/signin"}
           className="register-btn  has-text-centered py-2"
           >Sign in</NavLink>

        </div>
        <Outlet />

      </div>
    </div>
  )
}

export default Register 