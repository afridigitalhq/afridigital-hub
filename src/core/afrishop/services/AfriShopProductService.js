import AfriShopCatalogEngine from "../catalog/AfriShopCatalogEngine";

const AfriShopProductService = {

  create(product){

    return AfriShopCatalogEngine.addProduct(product);

  },

  getAll(){

    return AfriShopCatalogEngine.listProducts();

  }

};

export default AfriShopProductService;
