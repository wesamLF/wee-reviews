import React from 'react'
import { motion } from "framer-motion"

const AboutUsCard = ({ title, animationTime, children }) => {
    return (
        <motion.div
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: animationTime, type: "spring" }}
            className="column is-half is-clickable">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {title}
                    </p>
                    <p className="card-header-icon about-us-icon">
                        <span className="icon">
                            {children}
                        </span>
                    </p>
                </header>
            </div>

        </motion.div>
    )
}

export default AboutUsCard