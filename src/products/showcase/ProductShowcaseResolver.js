import ProductShowcaseRegistry from "./ProductShowcaseRegistry";

const ProductShowcaseResolver = Object.freeze({

  getAll(){

    return Object.values(ProductShowcaseRegistry);

  },

  get(id){

    return ProductShowcaseRegistry[id];

  }

});

export default ProductShowcaseResolver;
