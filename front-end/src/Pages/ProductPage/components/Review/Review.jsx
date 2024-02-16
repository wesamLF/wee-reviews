import React from 'react'
import "./review.css"
import DeleteReview from '../../../../components/deleteReview/DeleteReview'
import { useUserContext } from '../../../../context/UserContext'
import Rating from '../../../../components/Rating/Rating'
const Review = ({ data }) => {
    
    const { userInfo } = useUserContext()

    //to-do / strapi does not send user_permissions on production stage (digitl ocean)
    //see pages/productpage/Api/getProductData.js
    const checkIfReviewOwner = () => {
        if ( userInfo?.id && data?.attributes?.users_permissions_user?.data?.id === userInfo?.id) return true
        else return false

    }
    
    return (
        <>
            <hr className='review-hr' />
            <div className={`review-body columns is-size-6 m-0 p-4 ${checkIfReviewOwner()&& "review-custom-bg "}`} >
                <div className="column is-one-fifth 
                 is-flex is-justify-content-start is-align-items-start is-flex-direction-column">
                    {/* <span>{data.attributes.users_permissions_user.data.attributes.username}</span> */}
                    <span className='is-size-7'>{data.attributes.createdAt}</span>
                </div>
                <div className="column is-one-fifth 
                is-flex is-justify-content-center is-align-items-start">
                    <Rating ratingNumber={data.attributes.rating} /> 
                </div>
                <div className="column is-flex is-justify-content-start is-align-items-start">
                    {data.attributes.text}
                </div>
                {checkIfReviewOwner() && <DeleteReview userId={userInfo.id} reviewId={data.id} token={userInfo.token} />
 }
            </div>
        </>
    )
}

export default Review