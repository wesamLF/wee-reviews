import React from 'react'
import { useQuery } from '@tanstack/react-query'
import TrendingCard from '../TrendingCard/TrendingCard'
import { Whatshot } from "@material-ui/icons"
import { getTrendingProducts } from "../../Api/getTrendingProducts"
import Loader from '../../Util/Loader/Loader'
import ErrorMessage from '../../Util/errorMessage'
import { NavLink } from "react-router-dom";
const TrendingSection = () => {

    const trendingProducts = useQuery({
        queryKey: ["trendingProducts"],
        queryFn: getTrendingProducts,
        refetchOnWindowFocus: false
    })
    if (trendingProducts.isLoading) return <div className="hero is-large"><Loader /></div>
    if (trendingProducts.isError) return <ErrorMessage refetch={trendingProducts.refetch} message={"sorry something went wrong, we colud not retrieve trending products!"} />
    if (trendingProducts.data.length != 4) return <h1 className=' has-text-danger'>no product found!</h1>
    return (
        <>
                <div className=" is-flex is-justify-content-space-between  is-align-items-center mb-1 px-6" style={{ color: "#6C63FF" }}>
                    <p className='is-size-3 '>Trending <Whatshot /></p>
                    <NavLink to={"../../../market"} className=' is-size-5  is-clickable dark--text--color is-hidden-mobile'>View All</NavLink>
                </div>
                <div className="dark--bg--color p-5">

                    <div className="columns is-multiline is-mobile is-clipped">

                        {trendingProducts.data.map(product => (
                            <TrendingCard key={product.id} data={product.attributes} />
                        ))}

                    </div>
               

            </div>
        </>

    )
}

export default TrendingSection