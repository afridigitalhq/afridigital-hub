export default {
  id: "BATCH15-PRODUCTREGISTRY",
  source: "/data/data/com.termux/files/home/AfriDigitalHub/AfriDigital-api/src/bootstrap/registry/ProductRegistry.js",
  target: "/data/data/com.termux/files/home/AfriDigitalHub/AfriDigital-api/src/bootstrap/registry/AfriProductRegistry.js",
  modules: [
    "ProductRegistry"
  ],
  operations: [
    {
      type: "REWRITE_IMPORT",
      target: "/data/data/com.termux/files/home/AfriDigitalHub/AfriDigital-api/src"
    },
    {
      type: "REMOVE_FILE",
      target: "/data/data/com.termux/files/home/AfriDigitalHub/AfriDigital-api/src/bootstrap/registry/ProductRegistry.js"
    }
  ],
  mode: "MIGRATION"
};
