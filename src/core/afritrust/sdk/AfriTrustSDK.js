const AfriTrustSDK = {
  version: "1.0.0",

  getIdentity(identityId){
    return { identityId };
  },

  getProductProfile(identityId, product){
    return { identityId, product };
  },

  submitTrustSignals(product, signals){
    return { product, signals };
  },

  getPassport(identityId){
    return { identityId };
  }
};

export default AfriTrustSDK;
