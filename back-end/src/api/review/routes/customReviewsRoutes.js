module.exports = {
    routes: [
        {
            method: "POST",
            path: "/createreview/:gameId",
            handler: "review.createReview",
            config: {
                policies: [ "api::review.is-auth"],
                
            }
        },
        {
            method: "GET",
            path: "/myreviews/:reqUserId",
            handler: "review.myreviews",
            config: {
                policies: ["api::review.is-owner"],
                
            }
        },
        {
            method: "DELETE",
            path: "/myreviews/:reqUserId/:reviewId",
            handler: "review.deletemyreview",
            config: {
                policies: ["api::review.is-owner","api::review.is-owner-of-the-review"],
                
            }
        }
    
    ]
}