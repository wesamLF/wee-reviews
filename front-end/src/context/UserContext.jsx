import React, { createContext, useContext, useEffect, useState } from 'react'


const Context = createContext(null)
export const UserContext = ({ children }) => {

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))

    



    return (

        <Context.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </Context.Provider>

    )
}


//custom hook
export const useUserContext = () => {
    return useContext(Context)
}





