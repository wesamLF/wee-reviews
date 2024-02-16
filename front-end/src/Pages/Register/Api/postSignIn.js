
import axios from "axios"

export const postSignIn = async ({ username, password, email }) => {
    const newUrl = `${import.meta.env.VITE_BASE_URL}/api/auth/local/register`

    const res = await axios.post(newUrl , {
        username:username,
        email:email,
        password:password
    })
    return res
}
