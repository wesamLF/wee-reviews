import React from 'react'
import { AddShoppingCart } from "@material-ui/icons"

const MarketCard = () => {
    return (
        <div className="column is-3-desktop is-4-tablet is-6-mobile  ">
            <div class="card is-clickable">
                <figure class="image is-256x256">
                    <img src="/assets/images/trending-04.jpg" />
                </figure>
                <div className="p-1">
                    <div className="is-flex is-justify-content-space-between is-align-items-center">
                        <div className="is-size-5">master  duel</div>
                        <AddShoppingCart className='is-clickable' />
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default MarketCard