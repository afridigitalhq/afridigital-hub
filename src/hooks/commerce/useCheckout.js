import AfriCommerceApiClient from "../../core/africommerce/api/AfriCommerceApiClient";
import AfriCommerceEndpoints from "../../core/africommerce/api/AfriCommerceApiClient";

export default function useCheckout(){

  return AfriCommerceApiClient.request(
    "/commerce/checkout"
  );

}
