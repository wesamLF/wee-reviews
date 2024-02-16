import React from 'react'
import Hero from './Hero/Hero'
import TrendingSection from '../../../components/TrendingSection/TrendingSection'
import CategoriesSection from './CategoriesSection/CategoriesSection'
const Home = () => {

    return (
        <main className='pb-6'>
            <Hero />
            <CategoriesSection />
            <div className="hero  is-flex is-align-content-center is-justify-content-center is-flex-wrap-wrap mb-6 pb-6">
                <TrendingSection />
            </div>

        </main>
    )
}

export default Home