import axios from "axios"




export async function getMyReviews(key) {

        const id = key.queryKey[1]
        const token = key.queryKey[2]

        const newUrl = `${import.meta.env.VITE_BASE_URL}/api/myreviews/${id}?populate=*`
        

        const res = await axios.get(newUrl , {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        return res


}