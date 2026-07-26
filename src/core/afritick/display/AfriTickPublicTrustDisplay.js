/**
 * AfriTick Public Trust Display V2
 *
 * Canonical Public Trust Display
 */

const AfriTickPublicTrustDisplay = {

  render(profile = {}) {
    return {
      trust: {
        title: profile.trustTitle || "New Seller",
        level: profile.trustLevel || ""
      },

      seller: {
        name: profile.name || ""
      },

      listing: {
        title: profile.listingTitle || "",
        location: profile.location || "",
        price: profile.price || ""
      },

      badges: {
        afriVerified: !!profile.afriVerified,
        afriTickPremium: !!profile.afriTick,
        afriTrust: profile.afriTrust || null
      },

      stats: {
        successfulSales: profile.successfulSales || 0,
        rating: profile.rating || 0,
        reviews: profile.reviews || 0
      },

      icon: "AFRITICK_SAFEGUARD_BLUE"
    };
  }

};

export default AfriTickPublicTrustDisplay;
