import { useState, useEffect } from "react";
import axios from "axios"
const useFetchHook =(filter)=>{
    const url = `${import.meta.env.VITE_BASE_URL}/api`
    const [data , setData]= useState("")
    const [loading , setLoading]= useState(true)
    const [error , setError]= useState(false)

    useEffect(()=>{
        const asynFun = async()=>{
            const res = await axios.get(`${url}/products/4?populate=*`)
            // console.log("data", res.data.data.attributes)
        }
        asynFun()
    },[])

    return {data , loading , error}
}

export default useFetchHook;