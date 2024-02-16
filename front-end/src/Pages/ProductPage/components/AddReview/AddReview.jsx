import React, { useState } from 'react'
import "./addReview.css"
import { DeleteForever } from "@material-ui/icons"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postReview } from "../../Api/postReview";
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../../../context/UserContext'
import ToastSuccess from '../../../../Util/ToastSuccess'
import ToastError from '../../../../Util/ToastError'
import ErrorMessage from '../../../../Util/errorMessage';
import RatingInput from '../RatingInput/RatingInput';
const AddReview = () => {
    const productId = useParams("id")?.id
    const queryClient = useQueryClient()

    const { userInfo } = useUserContext()
    const [isClose, setIsClose] = useState(true)
    const [reviewData, setReviewData] = useState({
        userId: userInfo?.id,
        token: userInfo?.token,
        text: "",
        rating: 0,
        product: productId

    })

    const mutation = useMutation({
        mutationFn: postReview,
        onSuccess: (data) => {
            if (data.data.name == "ValidationError") return
            queryClient.invalidateQueries(["product"])
            ToastSuccess("Review Added successfully!")

        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({ ...reviewData })
    }
    const handleInputs = ({ target }) => {
        const { name, value } = target;
        setReviewData((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };
    const handleAddReviewBtn = () => {
        if (userInfo) {
            setIsClose(!isClose)
        } else {
            ToastError("you need to log in first to write a review.")
        }
    }
    return (
        <div className={`columns m-0 ${isClose ? "" : "add-review-form"}`}>
            <form
                onSubmit={handleSubmit}
                className={`column  py-2 ${isClose ? "is-hidden" : ""}`}>
                <textarea
                    className="textarea is-link"
                    placeholder="Link textarea"
                    name="text"
                    value={reviewData.text}
                    onChange={handleInputs}
                ></textarea>
                <div className="is-flex-tablet is-justify-content-space-between is-align-items-center  py-3">
                    <div className="stars">
                        <RatingInput setReviewData={setReviewData} />
                    </div>
                    <button className={`button dark--bg--color light--text--color ${mutation.isLoading ? "Disabled is-loading" : " "}`} >
                        Add review
                    </button>
                </div>

                {/* handle errors from strapi */}
                {mutation.isError &&
                    <ErrorMessage message={`${mutation.error.response.data.error.message} Please try again!`} />
                }
                {/* handle inputs errors*/}
                {
                    mutation.data?.data?.message == "2 errors occurred" ?
                        <ErrorMessage message={"Please enter valid inputs!"} /> : ""
                }
                {
                    mutation?.data?.data?.message && mutation?.data?.data?.message !== "2 errors occurred" ?
                        <ErrorMessage message={mutation.data.data.message} /> : ""
                }

            </form>
            <div className=" column has-text-right is-one-fifth ">
                <button className={`button button dark--bg--color light--text--color ${isClose ? "" : "is-rounded p-2"}`}
                    onClick={() => handleAddReviewBtn()}>
                    {isClose ? "Add Review" : <DeleteForever className='' />}
                </button>

            </div>
        </div>
    )
}

export default AddReview