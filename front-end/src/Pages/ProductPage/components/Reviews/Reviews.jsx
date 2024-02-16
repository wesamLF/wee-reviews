import React from 'react'
import Review from '../Review/Review'
import AddReview from '../AddReview/AddReview'
const Reviews = ({ data }) => {
    return (
        <div className='reviews-sections my-6 ' >
            <div className="container  ">
                <div className="columns m-0 is-relative ">
                    <span className='column is-half is-size-3 dark--text--color 
                    is-flex is-justify-content-center is-align-items-center'>Rviews</span>
                    <div className="column is-half is-size-3  has-backgroundd-link
                    is-flex is-justify-content-center is-align-items-center">
                        <AddReview />
                    </div>
                </div>
                {data.map((d, i) => {
                    return <Review key={i} data={d} />
                })}


            </div>
        </div>
    )
}

export default Reviews