import AfriShopDigitalCatalog from "./AfriShopDigitalCatalog";

export default class AfriShopDigitalProductService {

  add(product){

    AfriShopDigitalCatalog.products.push(product);

    return product;

  }

  list(){

    return AfriShopDigitalCatalog.products;

  }

}
