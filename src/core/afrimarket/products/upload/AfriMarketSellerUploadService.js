import AfriMarketProductService from "../services/AfriMarketProductService";

const AfriMarketSellerUploadService = {

  upload(product){

    const payload = {

      ...product,

      source: "AFRIMARKET",

      ownerType: "SELLER",

      status: "PENDING_REVIEW"

    };

    return AfriMarketProductService.create(payload);

  }

};

export default AfriMarketSellerUploadService;
