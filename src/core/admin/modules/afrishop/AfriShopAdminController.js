import AfriShopRegistryService from "../../../afrishop/services/AfriShopRegistryService.js";

const AfriShopAdminController = {
  viewProducts() {
    return AfriShopRegistryService.listProducts();
  },

  addProduct(product) {
    return AfriShopRegistryService.registerProduct(product);
  },

  deleteProduct(id) {
    return AfriShopRegistryService.removeProduct(id);
  },

  updateProduct(id, product) {
    return AfriShopRegistryService.replaceProduct(id, product);
  }
};

export default AfriShopAdminController;
