const AfriShopAdminUploadContract = Object.freeze({

  permission: "AFRIDIGITAL_ADMIN",

  source: "AFRISHOP",

  allowedTypes: [
    "PHYSICAL",
    "DIGITAL",
    "SUBSCRIPTION"
  ],

  requiredFields: [
    "title",
    "description",
    "price",
    "images",
    "type"
  ]

});

export default AfriShopAdminUploadContract;
