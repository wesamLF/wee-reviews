'use strict';

/**
 * `is-owner-of-the-review` policy
 */
const { entityService } = require("@strapi/strapi").factories
module.exports = async (policyContext, config, { strapi }) => {
  try {
    const userId = policyContext.state.user.id
    const { reviewId } = policyContext.request.params
    const reviewOwner = await strapi.entityService.findOne("api::review.review", reviewId, {
      populate: "users_permissions_user"
    })


    if (userId == reviewOwner.users_permissions_user.id) {
      return true
    }
    return false;
  } catch {
    return false
  }

};
