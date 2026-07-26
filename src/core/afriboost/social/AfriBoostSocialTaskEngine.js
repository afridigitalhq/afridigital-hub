/**
 * AfriBoost Social Task Engine V1
 * Manages social promotion tasks connected to AfriWork
 */

const AfriBoostSocialTaskEngine = {

  createTask(data){

    return {
      source:"AfriBoost",
      type:data.type,
      status:"AVAILABLE",
      reward:data.reward,
      campaign:data.campaign
    };

  },

  connect(){

    return {
      connected:true,
      services:[
        "AfriWork",
        "AfriAds",
        "AfriCoin",
        "AfriAI"
      ]
    };

  }

};

export default AfriBoostSocialTaskEngine;
