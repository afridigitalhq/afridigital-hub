/**
 * AfriTick Verification Workflow
 *
 * OWNER:
 * AfriTick Core.
 *
 * RULE:
 * Verification and premium membership remain separate.
 */

const AfriTickVerificationWorkflow = {

  submit(profile){

    return {
      profileId:profile.id,
      status:"PENDING_REVIEW"
    };

  },

  approve(profileId){

    return {
      profileId,
      badge:"VERIFIED",
      status:"APPROVED"
    };

  },

  reject(profileId){

    return {
      profileId,
      status:"REJECTED"
    };

  }

};

export default AfriTickVerificationWorkflow;
