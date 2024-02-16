import React, { useState } from 'react'
import { Star, StarOutline } from "@material-ui/icons"
import "./RatingInput.css"
const RatingInput = ({ setReviewData }) => {

    const [rating, setRating] = useState(0)
    const handleRating = (curr) => {
        setReviewData(prev => ({ ...prev, rating: curr }))
        setRating(curr)
    }
    return (
        <div className="ratingInput my-1 is-clickable">
            {[...Array(5)].map((star, i) => {
                const curr = i + 1;
                return (

                    <span
                        key={i}
                        className=''
                        name='rate'
                        value={curr}
                        onClick={() => handleRating(curr)}>
                        {rating < curr ? <StarOutline className='' /> : <Star className='' />}
                    </span>


                )
            })}

        </div>


    )
}

export default RatingInput