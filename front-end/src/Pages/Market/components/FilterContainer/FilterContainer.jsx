import React, { useRef } from 'react'
import "./FilterContainer.css"
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox'
import SearchBar from '../SearchBar/SearchBar'

const FilterContainer = () => {
    const catgory = useRef([])
    const platform = useRef([])

    return (
        <div className="is-flex is-flex-direction-column filter-container has-text-dark px-2">
            <SearchBar />
            <FilterCheckBox category={catgory} platform={platform}
                headerTitle={"platform"} checkBoxItems={["ps5", "ps4", "xbox1", "steam"]} />
            <FilterCheckBox category={catgory} platform={platform}
                headerTitle={"category"} checkBoxItems={["horror", "adventure", "racing", "FPS", "card game"]} />
        </div>
    )
}

export default FilterContainer