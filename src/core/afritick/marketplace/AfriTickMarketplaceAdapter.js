/**
 * AfriTick Marketplace Adapter
 *
 * OWNER:
 * AfriTick Core.
 *
 * RULE:
 * Every marketplace listing receives centralized trust signals.
 */

import AfriTickTrustResolver from "../trust/AfriTickTrustResolver";

const AfriTickMarketplaceAdapter = {

  attach(listing){

    return {
      ...listing,
      trust:
        AfriTickTrustResolver.resolve(
          listing.owner || {}
        )
    };

  }

};

export default AfriTickMarketplaceAdapter;
