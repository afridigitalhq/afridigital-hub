/**
 * AfriTick Badge Component
 *
 * OWNER:
 * Universal ecosystem trust display.
 *
 * RULE:
 * Every AfriDigital product uses one badge renderer.
 */

const AfriTickBadge = {

  render(profile={}){

    const badges=[];

    if(profile.premium){
      badges.push("🔵 AfriTick Premium");
    }

    if(profile.verifiedType){
      badges.push(`🛡️ Verified ${profile.verifiedType}`);
    }

    if(profile.official){
      badges.push("🟣 Official AfriDigital Partner");
    }

    return badges;

  }

};

export default AfriTickBadge;
