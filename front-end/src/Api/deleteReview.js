

import axios from "axios"



export async function deleteReview({ userId,reviewId, token }) {

        

        const newUrl = `${import.meta.env.VITE_BASE_URL}/api/myreviews/${userId}/${reviewId}`
        

        const res = await axios.delete(newUrl , {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        return res


}

