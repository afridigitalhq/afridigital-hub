const AfriMarketSellerUploadContract = Object.freeze({

  permission: "SELLER",

  source: "AFRIMARKET",

  allowedTypes: [
    "PHYSICAL",
    "DIGITAL"
  ],

  physicalCondition: [
    "NEW",
    "USED"
  ],

  requiredFields: [
    "title",
    "description",
    "price",
    "images",
    "type",
    "condition"
  ]

});

export default AfriMarketSellerUploadContract;
