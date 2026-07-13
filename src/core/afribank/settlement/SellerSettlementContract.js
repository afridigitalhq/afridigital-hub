const SellerSettlementContract = Object.freeze({

  status:[
    "PENDING",
    "HELD_ESCROW",
    "RELEASED",
    "COMPLETED",
    "FAILED"
  ],

  paymentSources:[
    "AFRICOIN",
    "NATIVE",
    "CRYPTO"
  ],

  fields:{
    orderId:"string",
    sellerId:"string",
    amount:"number",
    currency:"string",
    escrowStatus:"string",
    createdAt:"timestamp"
  }

});

export default SellerSettlementContract;
