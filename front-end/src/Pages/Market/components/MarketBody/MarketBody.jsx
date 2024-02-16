import { React, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import { useFilterContext } from "../../context/FilterContext"
import { uesPaginationContext } from '../../context/PaginationContext'
import { getFilteredProducts } from "../../Api/getFilteredProducts"
import Loader from '../../../../Util/Loader/Loader'
import ErrorMessage from '../../../../Util/errorMessage'

const MarketBody = () => {

    const { filter } = useFilterContext()
    const { paginationPage, setPaginationPage } = uesPaginationContext()

    const filteredProductsQuery = useQuery({
        queryKey: ["products", filter, paginationPage],
        queryFn: getFilteredProducts,
        refetchOnWindowFocus: false,
        cacheTime: 0
    })

    if (filteredProductsQuery.isLoading) return <Loader />
    if (filteredProductsQuery.isError) return <ErrorMessage refetch={filteredProductsQuery.refetch} message={"oops! please refresh the page."} />
    if (filteredProductsQuery.data.data.length === 0) return <h1 className=' has-text-danger'>no product found!</h1>

    if (!(filteredProductsQuery.data.data[0]?.attributes?.image
        && filteredProductsQuery.data.data[0]?.attributes?.categories?.data
        && filteredProductsQuery.data.data[0]?.attributes?.reviews?.data)) return <ErrorMessage refetch={filteredProductsQuery.refetch} message={"error data is not populate."} />

    return (
        <>

            <div className=" is-flex is-flex-direction-column">
                <div className='columns is-mobile is-multiline is-variable p-1'>
                    {filteredProductsQuery.data.data.map(product => (
                        <ProductCard key={product.id} data={product.attributes} id={product.id} />
                    ))}

                </div>
                <Pagination paginationData={filteredProductsQuery.data.meta.pagination} setPaginationPage={setPaginationPage} />



            </div>
        </>
    )
}

export default MarketBody