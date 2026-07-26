/**
 * AfriAI Suggestion Router
 *
 * OWNER:
 * AfriAI intent action layer.
 *
 * RULE:
 * UI emits intent.
 * Router resolves destination and revenue signals.
 */

const AfriAISuggestionRouter = {

  execute(action){

    switch(action){

      case "OPEN_AFRIWORK":
        return {
          route:"/afriwork",
          intent:"EARNING",
          adChannel:"TASKS",
          adsEnabled:true
        };

      case "OPEN_AFRIBOOST":
        return {
          route:"/afriboost",
          intent:"PROMOTION",
          adChannel:"BUSINESS_ADS",
          adsEnabled:true
        };

      case "OPEN_AFRICOMMERCE":
        return {
          route:"/africommerce",
          intent:"COMMERCE",
          adChannel:"MARKETPLACE_ADS",
          adsEnabled:true
        };

      case "OPEN_AFRISPORTS":
        return {
          route:"/afrisports",
          intent:"SPORTS_DISCOVERY",
          adChannel:"SPORTS_ADS",
          adsEnabled:true
        };

      case "OPEN_AFRICCTV":
        return {
          route:"/africctv",
          intent:"SECURITY",
          adChannel:"SECURITY_PRODUCTS",
          adsEnabled:true
        };

      default:
        return {
          route:null,
          intent:"UNKNOWN",
          adChannel:null,
          adsEnabled:false
        };
    }

  }

};

export default AfriAISuggestionRouter;
