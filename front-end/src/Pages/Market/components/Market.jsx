import React from 'react'
import './market.css'
import FilterContainer from './FilterContainer/FilterContainer'
import MarketBody from './MarketBody/MarketBody'
import { FilterContext } from "../context/FilterContext"
import { PaginationContext } from '../context/PaginationContext'
const Market = () => {
    
    return (
        <PaginationContext>
            <FilterContext>
                <div className=' container black--text--color py-6 my-6'>
                    <div className="columns is-mobile is-multiline is-variable m-0">
                        <div className="column is-2-desktop is-12-tablet is-12-mobile  ">
                            <FilterContainer />
                        </div>
                        <div className="market-container column is-10-desktop is-12-tablet is-12-mobile ">
                            <MarketBody />
                        </div>
                    </div>
                </div>
            </FilterContext>
        </PaginationContext>
    )
}

export default Market