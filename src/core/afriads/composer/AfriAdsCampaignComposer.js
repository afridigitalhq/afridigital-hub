/**
 * AfriAds Campaign Composer V1
 * User ad creation workflow
 */

const AfriAdsCampaignComposer = {

  create(data){

    return {
      id:Date.now(),
      status:"DRAFT",
      media:data.media || [],
      title:data.title,
      description:data.description,
      category:data.category,
      price:{
        currency:"AFRICOIN",
        amount:data.price || 0
      },
      duration:data.duration,
      target:data.target || {},
      discount:data.discount || null,
      coupon:data.coupon || null
    };

  }

};

export default AfriAdsCampaignComposer;
