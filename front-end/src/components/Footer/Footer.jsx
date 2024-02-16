import React from 'react'
import "./footer.css"
import { Instagram, Twitter, WhatsApp } from "@material-ui/icons"


const Footer = () => {
    return (
        <footer className="dark--bg--color bottom is-flex is-justify-content-center is-align-content-center "
        
        >

           
                <div className='is-flex is-justify-content-center is-align-content-center is-flex-direction-column is-flex-wrap-wrap has-text-white '>

                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <WhatsApp className='whats social-icons' />
                        <Instagram className='insta social-icons' />
                        <Twitter className='twitter social-icons' />
                        
                        
                    </div>
                    <p className='mt-3'>copyright © 2023 all rights reserved</p>
                
            </div>
        </footer>
    )
}

export default Footer