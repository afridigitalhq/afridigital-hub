import AfriDebugCore from "./AfriDebugCore.js";

const PRODUCT_MODES = Object.freeze({
  "admin-dashboard": "admin",
  "afridesign-studio": "studio"
});

const AfriDebugMount = {
  mount(product = {}) {
    const productId = product.id || "unknown-product";
    const mode = PRODUCT_MODES[productId] || "ecosystem";

    return {
      productId,
      mode,

      inspect(input = {}) {
        return AfriDebugCore.inspect({
          ...input,
          mode,
          productId,
          trustedAuthority:
            product.trustedAuthority === true && mode === "admin"
        });
      }
    };
  }
};

export default AfriDebugMount;
