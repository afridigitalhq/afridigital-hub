import ProductTierRenderer from "../renderers/ProductTierRenderer";

export default function useLandingProducts(){

  return {

    tier1: ProductTierRenderer.getTier1(),

    tier2: ProductTierRenderer.getTier2(),

    future: ProductTierRenderer.getFuture()

  };

}
