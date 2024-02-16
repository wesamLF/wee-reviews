
import axios from "axios"


export async function getFilteredProducts(key) {

                let newUrl = "";
                if (key?.queryKey[1].category.length != 0 || key?.queryKey[1].platform.length != 0 || key?.queryKey[1].searchTerm != "") {
                       
                        const currentPage = `pagination[page]=${key?.queryKey[2]}&pagination[pageSize]=8`
                        const category = await key?.queryKey[1]?.category?.map((cat) => `&filters[categories][name][$eq]=${cat}`)
                        const platform = await key?.queryKey[1]?.platform?.map((p) => `&filters[platform][name][$eq]=${p}`)
                        const searchTerm = `&filters[title][$startsWith]=${capitalizeFirstLetter(key?.queryKey[1]?.searchTerm)}`
                        const filteredCategory = category ? category.join("") : ""
                        const filteredPlatform = platform ? platform.join("") : ""
                        newUrl = `${import.meta.env.VITE_BASE_URL}/api/products?populate=*${filteredCategory}${filteredPlatform}&${searchTerm}&${currentPage}`
                } else {
                        const currentPage = `pagination[page]=${key?.queryKey[2]}&pagination[pageSize]=8`
                        newUrl = `${import.meta.env.VITE_BASE_URL}/api/products?populate=*&${currentPage}`


                }

                const res = await axios.get(newUrl)
                return res.data
        


}
function capitalizeFirstLetter(string) {
        //strapi search filter is case sensitive 
        return string.charAt(0).toUpperCase() + string.slice(1);
    }