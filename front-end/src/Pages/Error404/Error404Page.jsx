import React from 'react'
import { Link } from 'react-router-dom'

const Error404Page = () => {
    return (
        <div className="hero is-medium is-flex is-justify-content-center is-align-items-center pt-6">
            <div className="has-text-centered hero-body">
                <h1 className="is-size-1 has-text-weight-bold dark--text--color">404</h1>
                <p className="is-size-5 has-text-weight-medium"> <span className="has-text-danger">Opps!</span> Page not found.</p>
                <p className="is-size-6 mb-2">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link  to={"../home"} className="button dark--bg--color light--text--color ">Go Home</Link>
            </div>
        </div>
    )
}

export default Error404Page