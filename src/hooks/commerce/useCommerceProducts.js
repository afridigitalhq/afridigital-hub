import AfriCommerceApiClient from "../../core/africommerce/api/AfriCommerceApiClient";

export default function useCommerceProducts(){

  return AfriCommerceApiClient.request(
    "/commerce/products"
  );

}
