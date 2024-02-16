import React, { createContext, useContext, useState } from 'react'


const Context = createContext([])
export const CartContext = ({ children }) => {

    let localCart = JSON.parse(localStorage.getItem("cart"))
    if(!localCart){
        localCart = []
    }
    
    const [cart, setCart] = useState(localCart)
    




    return (

        <Context.Provider value={{ cart, setCart }}>
            {children}
        </Context.Provider>

    )
}


//custom hook
export const useCartContext = () => {
    return useContext(Context)
}
 




