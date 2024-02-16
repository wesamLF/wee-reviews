
import axios from "axios"

export const postLogIn = async ({ identifier, password }) => {



    const newUrl = `${import.meta.env.VITE_BASE_URL}/api/auth/local`
    const res = await axios.post(newUrl, {
        identifier: identifier,
        password: password
    })


    return res



}