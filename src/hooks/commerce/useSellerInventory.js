import AfriCommerceApiClient from "../../core/africommerce/api/AfriCommerceApiClient";
import AfriCommerceEndpoints from "../../core/africommerce/api/AfriCommerceEndpoints";

export default function useSellerInventory(){

  return AfriCommerceApiClient.request(
    AfriCommerceEndpoints.SELLER_INVENTORY
  );

}
