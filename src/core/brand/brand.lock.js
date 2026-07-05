export const BRAND = {
  engineName: "AfriVision",
  productName: "AfriCCTV",
  uiName: "AfriCCTV",

  resolve(type) {
    switch (type) {
      case "engine": return this.engineName;
      case "product": return this.productName;
      case "ui": return this.uiName;
      default: return this.productName;
    }
  }
};
