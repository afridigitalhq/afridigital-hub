/**
 * AfriTick Public Trust Card V2
 *
 * Central public identity card renderer.
 *
 * RULE:
 * Trust badges appear only from AfriTick resolver output.
 */

const AfriTickProfileTrustCard = {

  render(profile){

    return {
      title: profile.title || "",
      location: profile.location || "",
      badges: profile.badges || [],
      action: {
        label: profile.action || "View"
      }
    };

  }

};

export default AfriTickProfileTrustCard;
