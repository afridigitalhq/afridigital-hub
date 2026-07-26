/**
 * AfriTick Public Trust Card V3
 *
 * Locked Public Listing Format
 */

const AfriTickProfileTrustCard = {
  render(profile){
    return {
      trustTitle: profile.trustTitle || "New Seller",
      trustLevel: profile.trustLevel || "",
      name: profile.name || "",
      listingTitle: profile.listingTitle || "",
      location: profile.location || "",
      price: profile.price || "",
      verification:{
        afriVerified: !!profile.afriVerified,
        afriTick: !!profile.afriTick,
        afriTrust: profile.afriTrust || null
      },
      stats:{
        successfulSales: profile.successfulSales || 0,
        rating: profile.rating || 0,
        reviews: profile.reviews || 0
      },
      badges: profile.badges || [],
      action:{
        label: profile.action || "View"
      }
    };
  }
};

export default AfriTickProfileTrustCard;
