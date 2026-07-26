const AfriTrustPublicPassport = {
  build(identity, profiles){
    return {
      identity,
      profiles,
      generatedAt: Date.now()
    };
  }
};

export default AfriTrustPublicPassport;
