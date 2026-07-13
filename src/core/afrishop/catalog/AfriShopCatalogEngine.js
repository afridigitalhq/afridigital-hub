import AfriShopProducts from "./products.registry";

class AfriShopCatalogEngine {

  constructor(){
    this.catalog = AfriShopProducts.products;
  }

  addProduct(product){

    const entry = {
      ...product,
      source: "AFRISHOP",
      owner: "AFRIDIGITAL_ADMIN",
      createdAt: Date.now()
    };

    this.catalog.push(entry);

    return entry;
  }

  listProducts(){

    return this.catalog;

  }

}

export default new AfriShopCatalogEngine();
