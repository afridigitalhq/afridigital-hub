/**
 * AfriTick Public Trust Display
 *
 * OWNER:
 * AfriTick Core.
 *
 * RULE:
 * All ecosystem cards use one trust display format.
 */

const AfriTickPublicTrustDisplay = {

  render(profile={}){

    return {
      premium:
        profile.premium
          ? "AFRITICK_PREMIUM"
          : null,

      verification:
        profile.verified
          ? "VERIFIED"
          : null,

      icon:"AFRITICK_SAFEGUARD_BLUE"

    };

  }

};

export default AfriTickPublicTrustDisplay;
