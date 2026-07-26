/**
 * AfriAds Admin Publishing Channel V2
 * Temporary operator layer before Admin Dashboard
 */

const AfriAdsAdminPublishingChannel = {

  publish(data){

    return {
      id: Date.now(),
      type:"ADMIN_CAMPAIGN",
      status:"PUBLISHED",
      title:data.title,
      description:data.description,
      media:data.media || [],
      placement:data.placement || [],
      duration:data.duration || null,
      payment:{
        required:false,
        currency:"AFRICOiN"
      }
    };

  }

};

export default AfriAdsAdminPublishingChannel;
