import React from 'react'
import "./loader.css"
const Loader = () => {
    return (
        <div className="loader-holdder is-flex is-justify-content-center is-align-items-center pt-6 mt-6">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>)
}

export default Loader