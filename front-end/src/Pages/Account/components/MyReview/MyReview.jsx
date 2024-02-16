import React from 'react'
import "./MyReview.css"
import { NavLink } from 'react-router-dom'
import DeleteReview from '../../../../components/deleteReview/DeleteReview'
import { useUserContext } from '../../../../context/UserContext'
import Rating from "../../../../components/Rating/Rating"
const MyReview = ({ data }) => {
  const { userInfo } = useUserContext()

  const reviewId = data.id
  const userName = data.users_permissions_user.username
  const userId = data.users_permissions_user.id
  const porductName = data.product.title
  const porductId = data.product.id
  const createdAt = data.createdAt
  const desc = data.text
  const rating = data.rating


  return (
    <>
      <div className="columns is-size-6 m-0   ">

        <NavLink to={`../../product/${porductId}`} className="column myreview-body is-two-fifth 
                 is-flex is-justify-content-start is-align-items-start is-flex-direction-column ">
          <p className='is-size-5'>{porductName}</p>
          <p className='is-size-7'>{createdAt}</p>
            <Rating ratingNumber={rating} />
          

        </NavLink>

        <div className="column 
                is-flex is-justify-content-start is-align-items-start">
          {desc}
        </div>
        <div className="column is-one-fifth is-flex is-justify-content-center is-align-items-start"
        >
          <DeleteReview userId={userId} reviewId={reviewId} token={userInfo.token} />
        </div>
      </div>
      <hr className='review-hr ' />

    </>
  )
}

export default MyReview