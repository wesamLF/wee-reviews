import React, { useState } from 'react'
import { AddShoppingCart, Star, StarOutline } from "@material-ui/icons"
import "./rating.css"

const Rating = ({ ratingArray, ratingNumber }) => {
    // rating for component account/myreview
    if (ratingNumber) return <>
        <div className=' is-flex is-align-items-center'>
            {[...Array(5)].map((s, i) => {
                const curr = i + 1
                return (
                    <span key={i}>
                        {curr <= ratingNumber ? <Star className='is-size-6' /> : <StarOutline className='is-size-6' />}
                    </span>
                )
            })}
        </div></>


    // in case no one rated the product
    if (ratingArray?.length == 0 || !ratingArray) return <>
        <div className='rating-star is-flex is-align-items-center'>
            
            <StarOutline className='is-size-6' />
            <StarOutline className='is-size-6' />
            <StarOutline className='is-size-6' />
            <StarOutline className='is-size-6' />
            <StarOutline className='is-size-6' />
            <span className='is-size-6 '> (0)</span>

        </div>
    </>



    // clac the reviews rating then divide it by the total number of reviews
    let totalStars = ratingArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.attributes.rating
    }, 0);
    const stars = totalStars / ratingArray.length

    return (
        <div className='rating-star is-flex is-align-items-center '>
            {[...Array(5)].map((s, i) => {
                const curr = i + 1
                return (
                    <div className='' key={i}>
                        {curr <= stars ? <Star className='is-size-6' /> : <StarOutline className='is-size-6' />}
                    </div>
                )
            })}
            <span className='is-size-7 '> ({ratingArray?.length})</span>
        </div>


    )
}

export default Rating