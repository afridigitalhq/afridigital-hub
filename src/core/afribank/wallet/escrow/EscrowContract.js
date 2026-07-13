const EscrowContract = Object.freeze({

  status:[
    "HELD",
    "RELEASED",
    "REFUNDED"
  ],

  purpose:[
    "BUYER_PROTECTION",
    "SELLER_SETTLEMENT"
  ]

});

export default EscrowContract;
