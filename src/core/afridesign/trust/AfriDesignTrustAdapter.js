const AfriDesignTrustAdapter = {

  buildSignals(creator){

    return {
      creatorId: creator.creatorId,

      completedProjects: creator.completedProjects || 0,

      clientRatings: creator.clientRatings || 0,

      revisions: creator.revisions || 0,

      disputes: creator.disputes || 0,

      verifiedSkills: creator.verifiedSkills || [],

      portfolioQuality: creator.portfolioQuality || 0,

      deliverySuccess: creator.deliverySuccess || 0
    };

  }

};

export default AfriDesignTrustAdapter;
