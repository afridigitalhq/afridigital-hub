import AfriMarketProductEngine from "../products/AfriMarketProductEngine";

const AfriMarketProductService = {

  create(product, seller){

    return AfriMarketProductEngine.createProduct(
      product,
      seller
    );

  },

  getAll(){

    return AfriMarketProductEngine.listProducts();

  }

};

export default AfriMarketProductService;
