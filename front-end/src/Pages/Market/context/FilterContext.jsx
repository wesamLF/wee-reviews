import React, { createContext, useContext, useState } from 'react'


const Context = createContext([])
export const FilterContext = ({ children }) => {
    const [filter, setFilter] = useState({
        category: [],
        platform: [],
        searchTerm:""
    })

    return (

        <Context.Provider value={{ filter, setFilter }}>
            {children}
        </Context.Provider>

    )
}


export const useFilterContext = () => {
    return useContext(Context)
}
 




