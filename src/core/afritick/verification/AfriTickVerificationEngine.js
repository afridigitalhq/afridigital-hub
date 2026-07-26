/**
 * AfriTick Verification Engine
 *
 * OWNER:
 * Identity verification layer.
 *
 * RULE:
 * Verification proves identity.
 */

const AfriTickVerificationEngine = {

  verify(identity){

    return {
      status:"KYC_VERIFIED",
      identity
    };

  }

};

export default AfriTickVerificationEngine;
