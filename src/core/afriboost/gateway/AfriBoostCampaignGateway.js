/**
 * AfriBoost Campaign Gateway V1
 * User entry point into AfriAds promotion infrastructure
 */

const AfriBoostCampaignGateway = {

  createCampaign(data){

    return {
      source:"AfriBoost",
      destination:"AfriAds",
      status:"SUBMITTED",
      campaign:data
    };

  },

  connect(){

    return {
      connected:true,
      services:[
        "AfriAds",
        "AfriAI",
        "AfriCoin",
        "AfriWork"
      ]
    };

  }

};

export default AfriBoostCampaignGateway;
