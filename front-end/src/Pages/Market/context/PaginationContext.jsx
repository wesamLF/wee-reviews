import React, { createContext, useContext, useState } from 'react'


const Context = createContext(null)
export const PaginationContext = ({ children }) => {

    
    const [paginationPage, setPaginationPage] = useState(1)



    return (

        <Context.Provider value={{ paginationPage, setPaginationPage }}>
            {children}
        </Context.Provider>

    )
}



export const uesPaginationContext = () => {
    return useContext(Context)
}
 




