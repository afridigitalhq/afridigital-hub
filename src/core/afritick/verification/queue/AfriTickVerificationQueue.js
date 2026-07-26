/**
 * AfriTick Verification Queue
 *
 * OWNER:
 * AfriTick Core.
 *
 * RULE:
 * Verification requests follow controlled approval flow.
 */

const AfriTickVerificationQueue = {

  requests:[],

  submit(request){

    return {
      id:Date.now(),
      status:"PENDING_REVIEW",
      request
    };

  },

  review(request){

    return {
      ...request,
      status:"UNDER_REVIEW"
    };

  }

};

export default AfriTickVerificationQueue;
