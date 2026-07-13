const DigitalProductContract = Object.freeze({

  type: "DIGITAL",

  delivery: [
    "DOWNLOAD",
    "LICENSE",
    "ACCESS"
  ],

  categories: [
    "SOFTWARE",
    "TEMPLATES",
    "DIGITAL_ASSETS",
    "COURSES",
    "DOCUMENTS",
    "SUBSCRIPTIONS"
  ],

  fields: {
    title: "string",
    description: "string",
    file: "asset",
    license: "object",
    access: "object",
    price: "number",
    currency: "AFRICOIN",
    status: "ACTIVE"
  }

});

export default DigitalProductContract;
