import AfriShopCatalogRegistry from "../registry/AfriShopCatalogRegistry.js";

const AfriShopRegistryService = {
  listProducts() {
    return AfriShopCatalogRegistry.products || [];
  },

  getProduct(id) {
    return this.listProducts().find(product => product.id === id);
  },

  registerProduct(product) {
    AfriShopCatalogRegistry.products.push(product);
    return product;
  },

  removeProduct(id) {
    AfriShopCatalogRegistry.products =
      this.listProducts().filter(product => product.id !== id);
  },

  replaceProduct(id, updatedProduct) {
    const index = this.listProducts().findIndex(product => product.id === id);

    if (index !== -1) {
      AfriShopCatalogRegistry.products[index] = updatedProduct;
    }

    return updatedProduct;
  }
};

export default AfriShopRegistryService;
