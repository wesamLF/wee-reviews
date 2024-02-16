'use strict';



module.exports = async (policyContext, config, { strapi }) => {
  try {
    const { reqUserId } = policyContext.request.params // NaN!
    const tokenUser = policyContext.state.user?.id
    if (reqUserId == tokenUser) {
      return true
    }


    return false;

  } catch {
    return false
  }
};
