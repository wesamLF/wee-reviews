import React, { useState } from 'react'
import { useFilterContext } from '../../context/FilterContext'
const SearchBar = () => {
    const { filter, setFilter } = useFilterContext()
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (value) => {
        setSearchTerm(value)
        setFilter({ ...filter, searchTerm: value })
    }
    return (
        <>
            <div className="control">
                <input className="input" type="text"  placeholder="Search for a game" value={searchTerm} onChange={(e) => { handleSearch(e.target.value) }} />
            </div>
        </>
    )
}

export default SearchBar