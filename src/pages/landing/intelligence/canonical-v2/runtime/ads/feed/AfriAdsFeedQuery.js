/**
 * AfriAds Feed Query
 *
 * OWNER:
 * Consumer request format.
 */

const AfriAdsFeedQuery = {

  create(intent,context={}){

    return {
      intent,
      context,
      timestamp:Date.now()
    };

  }

};

export default AfriAdsFeedQuery;
