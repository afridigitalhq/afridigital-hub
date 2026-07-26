const AfriTickUniversalBadgeConsumer = {

  products:[
    "AfriBoost",
    "AfriWork",
    "AfriCommerce",
    "AfriDesignStudio",
    "AfriAI"
  ],

  attach(profile){

    return {
      entityId:profile.entityId,
      afriTick:true,
      badge:"AfriTick ⭐",
      trustScore:profile.trustScore || 0,
      verificationLevel:profile.verificationLevel || "NEW"
    };

  }

};

export default AfriTickUniversalBadgeConsumer;
