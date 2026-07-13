const ProductContract = Object.freeze({

  id: "PRODUCT_ID",

  source: [
    "AFRISHOP",
    "AFRIMARKET"
  ],

  store: [
    "OFFICIAL_STORE",
    "SELLER_MARKETPLACE"
  ],

  type: [
    "PHYSICAL",
    "DIGITAL",
    "SUBSCRIPTION",
    "SERVICE"
  ],

  category: [
    "ELECTRONICS",
    "HARDWARE",
    "SOFTWARE",
    "DIGITAL_ASSETS",
    "OTHER"
  ],

  condition: [
    "NEW",
    "USED",
    "NOT_APPLICABLE"
  ],

  fields: {
    title: "string",
    description: "string",
    images: "array",
    price: "number",
    currency: "AFRICOIN",
    seller: "object",
    inventory: "object",
    status: "ACTIVE",
    createdAt: "timestamp"
  }

});

export default ProductContract;
