
import axios from "axios"

export const postReview = async ({ userId, text, rating, product, token }) => {


    const newUrl = `${import.meta.env.VITE_BASE_URL}/api/createreview/${product}`


    const res = await axios.post(
        newUrl,

        {
            data: {
                userId: userId,
                text: text,
                rating: rating

            }
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }


    )
    return res






}

