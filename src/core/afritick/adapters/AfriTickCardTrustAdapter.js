/**
 * AfriTick Card Trust Adapter
 *
 * OWNER:
 * Universal ecosystem card trust connector.
 *
 * RULE:
 * Cards consume AfriTick trust signals from one source.
 */

import AfriTickBadge from "../ui/AfriTickBadge";

const AfriTickCardTrustAdapter = {

  attach(card={}){

    return {
      ...card,
      trustBadges:
        AfriTickBadge.render(
          card.profile || {}
        )
    };

  }

};

export default AfriTickCardTrustAdapter;
