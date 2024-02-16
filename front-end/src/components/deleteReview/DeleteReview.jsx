import React from 'react'
import { DeleteForever } from "@material-ui/icons"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteReview } from '../../Api/deleteReview'
import ToastSuccess from '../../Util/ToastSuccess'
const DeleteReview = ({userId , reviewId , token}) => {

    const queryClient = useQueryClient()



    const mutation = useMutation({
        mutationFn: deleteReview,
        onSuccess: async(data) => {
            await queryClient.invalidateQueries(["reviews"])
            await queryClient.invalidateQueries(["product"])
 
            ToastSuccess("Review deleted successfully!")

        }
    })

    const handleDelete = (e) => {
        e.preventDefault()
        mutation.mutate({ userId , reviewId, token })
    }



    return (
        <div className="is-flex is-justify-content-center" onClick={handleDelete}>
            <DeleteForever className='myreview-delete-item-icon is-clickable' />
        </div>)
}

export default DeleteReview