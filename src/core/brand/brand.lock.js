export const BRAND = {
  engineName: "AfriVision",
  productName: "AfriMonitor",
  uiName: "AfriMonitor",

  resolve(type) {
    switch (type) {
      case "engine": return this.engineName;
      case "product": return this.productName;
      case "ui": return this.uiName;
      default: return this.productName;
    }
  }
};
