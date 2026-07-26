/**
 * AfriTick Admin Trust Console
 *
 * OWNER:
 * AfriControlCenter trust operations.
 *
 * RULE:
 * Admins manage trust governance centrally.
 */

const AfriTickAdminTrustConsole = {

  requests:[],

  approve(requestId){

    return {
      requestId,
      status:"APPROVED"
    };

  },


  reject(requestId){

    return {
      requestId,
      status:"REJECTED"
    };

  },


  review(requestId){

    return {
      requestId,
      status:"UNDER_REVIEW"
    };

  }

};

export default AfriTickAdminTrustConsole;
