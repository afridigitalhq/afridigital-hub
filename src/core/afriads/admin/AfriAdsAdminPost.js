/**
 * AfriAds Admin Post Runtime
 *
 * Temporary operator layer before Admin Dashboard UI.
 * RULE:
 * Termux actions simulate admin publishing flow.
 */

const AfriAdsAdminPost = {

  createCampaign(data){

    return {
      id:Date.now(),
      title:data.title,
      description:data.description,
      status:"APPROVED",
      source:"ADMIN_RUNTIME"
    };

  }

};

export default AfriAdsAdminPost;
