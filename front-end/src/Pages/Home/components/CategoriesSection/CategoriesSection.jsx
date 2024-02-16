import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import "./categoriesSection.css"
const CategoriesSection = () => {

    return (
        

            <section className='hero is-fullheight-with-navbar is-flex is-align-content-center is-flex-wrap-wrap'>
                <div className="is-clipped category-container">
                    <div className="title is-flex is-justify-content-center is-align-items-center mb-6">
                        <p className='is-size-3 dark--text--color'>Categories</p>
                    </div>
                    <div className="columns is-multiline is-mobile ">
                        <CategoryCard
                            CategoryName={"🗺️ Adventure 🗺️"}
                            desc={"Unleash Your Inner Explorer From ancient ruins to fantastical realms, our Adventure Games collection invites you to embrace the spirit of exploration."}
                            imgSrc={"/assets/images/action.jpg"} />
                        <CategoryCard
                            CategoryName={"🔫 FPS 🎯"}
                            desc={"Gear Up, Soldier! It's Time to Dominate. Welcome to the battleground of adrenaline-fueled action and strategic warfare."}
                            imgSrc={"/assets/images/fps.jpg"}  />
                        <CategoryCard
                            CategoryName={"💀 Horror 💀"}
                            desc={" Choose Your Fear Whether you're a fan of classic jump scares, psychological horror, or survival nightmares, our Horror Games Collection has something to make even the bravest souls tremble."} 
                            imgSrc={"/assets/images/horror.jpg"} />
                        <CategoryCard
                            CategoryName={"🃏 Card Game 🃏"}
                            desc={"From classic favorites to modern masterpieces, our Card Games collection offers a diverse array of decks and genres."} 
                            imgSrc={"/assets/images/cardGames.jpg"} />
                    </div>
                </div>

            </section>

        )
}

export default CategoriesSection