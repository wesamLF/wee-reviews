
import axios from "axios"


export async function getTrendingProducts(key) {

        

                const newUrl = `${import.meta.env.VITE_BASE_URL}/api/products?populate=*&pagination[start]=0&pagination[limit]=4`

                const res = await axios.get(newUrl)


                return res.data.data

    

}