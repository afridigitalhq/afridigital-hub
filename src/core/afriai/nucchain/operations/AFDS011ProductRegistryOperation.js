const AFDS011ProductRegistryOperation = {
  id: "AFDS-011",
  type: "MIGRATION_OPERATION",

  operations: [
    {
      type: "REWRITE_IMPORT",
      target: "src/bootstrap/AfriDigitalBootstrap.js"
    },
    {
      type: "REWRITE_IMPORT",
      target: "src/bootstrap/tools/SidebarInventory.js"
    },
    {
      type: "REWRITE_IMPORT",
      target: "src/bootstrap/binding/ProductPluginMap.js"
    },
    {
      type: "REWRITE_IMPORT",
      target: "src/api/products/routes.js"
    },
    {
      type: "REWRITE_IMPORT",
      target: "src/adminos/bootstrap/initAdminOS.js"
    },
    {
      type: "REWRITE_IMPORT",
      target: "src/adminos/live/initAdminOSLive.js"
    }
  ],

  status: "READY"
};

export default AFDS011ProductRegistryOperation;
