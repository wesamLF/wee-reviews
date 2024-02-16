import React from 'react'
import "./platform.css"
const Platform = ({ platform }) => {

    return (
        <>
            <div className={`platform-container is-flex-wrap-wrap is-background-danger`}>
               
                    
                        <p className={`is-uppercase ${platform}`}>{platform}</p>
                    
            
            </div>

        </>
    )
}

export default Platform