import React from 'react'
import "./hero.css"
import { Search } from "@material-ui/icons"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <>
            <div className="circles"></div>
            <section className="container hero is-relative  is-fullheight-with-navbar is-flex is-align-content-center is-justify-content-center is-flex-wrap-wrap">

                <div className="columns is-multiline is-mobile m-0 px-2 pt-6" >
                    <div className=" column is-6-desktop is-6-tablet is-12-mobile  is-flex is-align-content-center
                     is-justify-content-center is-flex-direction-column mb-6">
                        <div className="title  is-size-1 is-size-3-mobile pb-3 is-pb-0-mobile">
                        🎮 Explore, Discover, Play
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="subtitle is-size-6-mobile">
                            Find your next gaming adventure in our vast collection of digital games. From heart-pounding action to immersive storytelling, we've got something for every gamer.
                        </motion.div>
                        <div className="dark--bg--color columns is-multiline is-mobile is-clipped	">
                            <motion.div
                                initial={{ x: "-100" }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                className="column ">
                                <NavLink to={"../market"} className="button is-fullwidth has-text-weight-bold has-text-white dark--text--color px-2">
                                    <Search className='mr-2 ' />Explore
                                </NavLink>
                            </motion.div>
                        </div>

                    </div>
                    <div className="column  is-6-desktop is-6-tablet is-12-mobile  is-flex is-align-content-center is-justify-content-center  p-0">
                        <figure className="image">
                            <img src="/assets/images/gaming.svg" />
                        </figure>
                    </div>
                </div>


            </section>
        </>

    )
}

export default Hero