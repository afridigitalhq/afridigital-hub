/**
 * AfriAds Campaign Validator
 *
 * OWNER:
 * Campaign quality control.
 */

const AfriAdsCampaignValidator = {

 validate(campaign){

   return Boolean(
     campaign.title &&
     campaign.destination &&
     campaign.intentTarget
   );

 }

};

export default AfriAdsCampaignValidator;
