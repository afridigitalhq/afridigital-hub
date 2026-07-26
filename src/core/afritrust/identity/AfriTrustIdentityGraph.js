const AfriTrustIdentityGraph = {
  connect(identityId, profiles=[]){
    return {
      identityId,
      profiles
    };
  }
};

export default AfriTrustIdentityGraph;
