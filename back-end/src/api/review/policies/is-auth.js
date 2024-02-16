'use strict';

/**
 * `is-auth` policy
 */

module.exports = (policyContext, config, { strapi }) => {

  const reqUser = policyContext.request.body?.data?.userId
  const tokenUser = policyContext.state.user?.id

  if (reqUser === tokenUser) {
    return true
  }


  return false;
};
