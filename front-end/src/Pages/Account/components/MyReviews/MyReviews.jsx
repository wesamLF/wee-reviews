import React from 'react'
import { getMyReviews } from "../../Api/getMyReviews"
import { useQuery } from '@tanstack/react-query'
import { useUserContext } from '../../../../context/UserContext'
import Loader from '../../../../Util/Loader/Loader'
import ErrorMessage from '../../../../Util/errorMessage'
import MyReview from '../MyReview/MyReview'

const MyReviews = () => {

  const { userInfo } = useUserContext()
  const reviews = useQuery({
    queryKey: ["reviews", userInfo.id, userInfo.token],
    queryFn: getMyReviews,
    refetchOnWindowFocus: false
  })

  if (reviews.isLoading) return <>
    <Loader />
  </>
  if (reviews.isError) return <>
    <ErrorMessage refetch={reviews.refetch} message={"oops! sothing went wrong, please refresh the page."} />
  </>
  return (
    <>
     {reviews.data.data.length == 0 && <h1>Empty!</h1>}
      {reviews.data.data.reverse().map((review) => {
        return <MyReview key={review.id} data={review} />
      })}
    </>
  )
}

export default MyReviews