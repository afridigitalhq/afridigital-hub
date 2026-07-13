import AfriMarketProducts from "./AfriMarketProductRegistry";

class AfriMarketProductEngine {

  constructor(){
    this.products = AfriMarketProducts.products;
  }

  createProduct(product, seller){

    const entry = {

      ...product,

      source: "AFRIMARKET",

      seller,

      createdAt: Date.now()

    };

    this.products.push(entry);

    return entry;

  }

  listProducts(){

    return this.products;

  }

}

export default new AfriMarketProductEngine();
