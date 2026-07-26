/**
 * AfriAds Campaign Manager
 *
 * OWNER:
 * Admin campaign control layer.
 *
 * RULE:
 * All campaigns require controlled publishing.
 */

const AfriAdsCampaignManager = {

  campaigns:[],

  create(campaign){

    this.campaigns.push({
      ...campaign,
      status:"PENDING"
    });

  },

  approve(id){

    const campaign =
      this.campaigns.find(
        item=>item.id===id
      );

    if(campaign){
      campaign.status="ACTIVE";
    }

  },

  getCampaigns(){

    return this.campaigns;

  }

};

export default AfriAdsCampaignManager;
