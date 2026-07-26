/**
 * AfriAI Sponsored Layout Engine
 *
 * OWNER:
 * AfriAI + AfriAds presentation intelligence.
 *
 * RULE:
 * Mix intent suggestions and sponsored campaigns safely.
 */

const AfriAISponsoredLayoutEngine = {

  compose({
    suggestions=[],
    ads=[],
    device="desktop"
  }){

    const adLimit =
      device==="mobile" ? 1 : 2;

    return [
      ...suggestions,
      ...ads.slice(0,adLimit)
    ];

  }

};

export default AfriAISponsoredLayoutEngine;
