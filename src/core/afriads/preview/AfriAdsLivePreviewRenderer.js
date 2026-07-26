/**
 * AfriAds Live Preview Renderer V1
 */

const AfriAdsLivePreviewRenderer = {

 render(ad){

   return {
     badge:ad.badge || "AFRITICK_PENDING",
     title:ad.title,
     media:ad.media,
     description:ad.description,
     price:ad.price,
     discount:ad.discount,
     coupon:ad.coupon,
     button:"View"
   };

 }

};

export default AfriAdsLivePreviewRenderer;
