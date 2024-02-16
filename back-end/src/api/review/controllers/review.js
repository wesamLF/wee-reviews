// @ts-nocheck
'use strict';

/**
 * review controller
 */

const { entityService } = require("@strapi/strapi").factories
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
    createReview: async (ctx, next) => {
        try {
            const user = ctx.state.user
            // @ts-ignore
            const { gameId } = ctx.request.params
            const text = ctx.request.body.data.text
            const rating = ctx.request.body.data.rating


            const res = await strapi.entityService.create("api::review.review", {
                data: {
                    users_permissions_user: user.id,
                    product: gameId,
                    text: text,
                    rating: rating,
                    publishedAt: new Date().getTime(),

                }
            })
            return res

        }
        catch (err) {

            return err
        }
    },
    myreviews: async (ctx, next) => {
        try {
            const user = ctx.state.user
            // @ts-ignore
            const res = await strapi.entityService.findMany("api::review.review", {
                populate: "*",
                filters: { users_permissions_user: user.id }
            })
            return res

        }
        catch (err) {

            return err
        }
    },
    deletemyreview: async (ctx, next) => {
        try {
            const { reviewId } = ctx.request.params
            await strapi.entityService.delete("api::review.review" , reviewId)
            return "review has been deleted successfully!"

        }
        catch (err) {

            return err
        }
    },
}));
