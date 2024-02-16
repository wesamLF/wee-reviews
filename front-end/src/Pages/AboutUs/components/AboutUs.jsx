import React from 'react'
import { AccessTime, CreditCard, ContactSupport, BatteryChargingFull } from "@material-ui/icons"
import AboutUsCard from './AboutUsCard/AboutUsCard'

const AboutUs = () => {
    return (
        <main className='container py-6 px-3 hero is-fullheight is-flex  is-align-items-center'>
            <section className=" py-6">

                <h2 className="is-size-2 dark--text--color has-text-weight-bold	">
                    About us
                </h2>

                <div className=" mb-6">
                    <span>
                        We are an e-commerce company specializes on selling digital
                        games for all the platforms and consoles with the best prices.
                        With multiple payment methods and fast customer support.
                    </span>
                </div>
                <div className="">
                    <div className="columns m-0">
                        <AboutUsCard title={"No More Waitning!"} animationTime={1}>
                            <AccessTime />
                        </AboutUsCard>
                        <AboutUsCard title={"Safe Payment Methods!"} animationTime={1.5}>
                            <CreditCard />
                        </AboutUsCard>
                    </div>
                    <div className="columns m-0">
                        <AboutUsCard title={"24/7 Customer Support!"} animationTime={2}>
                            <ContactSupport />
                        </AboutUsCard>
                        <AboutUsCard title={"Gear Up!!"} animationTime={2.5}>
                            <BatteryChargingFull />
                        </AboutUsCard>
                    </div>

                </div>


            </section>
        </main >
    )
}

export default AboutUs