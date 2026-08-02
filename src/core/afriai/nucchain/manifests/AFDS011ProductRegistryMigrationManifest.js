const AFDS011 = {
  id: "AFDS-011",
  name: "AfriProductRegistry Canonical Migration",
  type: "MIGRATION",
  source: "AfriDigital-api/src/bootstrap/registry/ProductRegistry.js",
  target: "AfriDigital-api/src/bootstrap/registry/AfriProductRegistry.js",
  modules: [
    "AfriProductRegistry",
    "AfriDigitalBootstrap",
    "SidebarInventory",
    "ProductPluginMap",
    "ProductsAPI",
    "AdminOS"
  ],
  files: [
    "src/bootstrap/AfriDigitalBootstrap.js",
    "src/bootstrap/tools/SidebarInventory.js",
    "src/bootstrap/binding/ProductPluginMap.js",
    "src/api/products/routes.js",
    "src/adminos/bootstrap/initAdminOS.js",
    "src/adminos/live/initAdminOSLive.js"
  ],
  rules: [
    "NO_DUPLICATE_PRODUCT_REGISTRY",
    "PRESERVE_CANONICAL_API",
    "VALIDATE_IMPORTS",
    "SNAPSHOT_BEFORE_CHANGE",
    "VERIFY_AFTER_MIGRATION"
  ],
  status: "PLANNED"
};

export default AFDS011;
