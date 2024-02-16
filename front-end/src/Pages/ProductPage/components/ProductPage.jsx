import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import "./productPage.css"
import Product from './Product/Product'
import ErrorMessage from '../../../Util/errorMessage';
import Reviews from './Reviews/Reviews'
import { getProductData } from '../Api/getProductData'
import Loader from '../../../Util/Loader/Loader'
import TrendingSection from '../../../components/TrendingSection/TrendingSection'

const ProductPage = () => {
    const id = useParams("id")
    const product = useQuery({
        queryKey: ["product" , id],
        queryFn: getProductData,
        refetchOnWindowFocus: false
    })

    // custom container becuase the parent of this component is the root!
    if (product.isLoading) return <>
        <div className="product-page-container is-flex is-justify-content-center is-align-items-center">
            <Loader />
        </div>
    </>
    if (product.isError) return <>
        <div className="product-page-container is-flex is-justify-content-center is-align-items-center">
            <ErrorMessage refetch={product.refetch} message={"oops! sothing went wrong, please refresh the page."} />
        </div>
    </>

    return (
        <>

            <Product data={product.data} id={id.id} />
            <hr className='reviews-hr' />
            <Reviews data={product.data.reviews.data} />

            <TrendingSection />


        </>
    )
}

export default ProductPage