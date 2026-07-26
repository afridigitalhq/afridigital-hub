/**
 * AfriTick Card Renderer
 *
 * OWNER:
 * Universal ecosystem cards.
 */

import AfriTickBadgeRenderer from "./AfriTickBadgeRenderer";

const AfriTickCardRenderer = {

  attach(card){

    return {
      ...card,
      trust:
        AfriTickBadgeRenderer.render(
          card.profile || {}
        )
    };

  }

};

export default AfriTickCardRenderer;
