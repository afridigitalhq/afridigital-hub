/**
 * AfriAds Campaign Budget & Reach Runtime V1
 * Estimates campaign delivery capacity
 */

const AfriAdsBudgetCalculator = {

  calculate(campaign){

    return {
      budget:campaign.budget || 0,
      currency:"AFRICOiN",
      duration:campaign.duration || 0,
      estimatedReach:campaign.reach || 0,
      status:"CALCULATED"
    };

  }

};

export default AfriAdsBudgetCalculator;
