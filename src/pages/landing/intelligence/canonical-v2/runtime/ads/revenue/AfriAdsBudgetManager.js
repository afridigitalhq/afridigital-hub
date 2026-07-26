/**
 * AfriAds Budget Manager
 *
 * OWNER:
 * Campaign spending control.
 */

const AfriAdsBudgetManager = {

  campaigns:[],

  allocate(campaign){

    this.campaigns.push({
      ...campaign,
      spent:0
    });

  }

};

export default AfriAdsBudgetManager;
