import AfriShopProductService from "../../../../afrishop/services/AfriShopProductService";

const AfriShopAdminUploadService = {

  upload(product){

    const payload = {

      ...product,

      source: "AFRISHOP",

      owner: "AFRIDIGITAL_ADMIN",

      status: "ACTIVE"

    };

    return AfriShopProductService.create(payload);

  }

};

export default AfriShopAdminUploadService;
