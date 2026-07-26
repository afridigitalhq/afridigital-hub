const AfriTrustPublicListingCard={
  render(profile={}){
    return{
      trust:profile.platformTrust||profile.productTrust||null,
      name:profile.name||"",
      title:profile.title||"",
      location:profile.location||"",
      price:profile.price||"",
      afriVerified:!!profile.afriVerified,
      afriTickPremium:!!profile.afriTickPremium,
      statistics:profile.statistics||{},
      ratings:profile.ratings||{}
    };
  }
};

export default AfriTrustPublicListingCard;
