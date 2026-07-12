import AfriCommerceApiClient from "../../core/africommerce/api/AfriCommerceApiClient";
import AfriCommerceEndpoints from "../../core/africommerce/api/AfriCommerceEndpoints";

export default function useCheckout(){

  return AfriCommerceApiClient.request(
    AfriCommerceEndpoints.CHECKOUT
  );

}
