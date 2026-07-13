const TransactionRecord = Object.freeze({

  types:[
    "PAYMENT",
    "TRANSFER",
    "ESCROW_HOLD",
    "ESCROW_RELEASE",
    "SETTLEMENT"
  ],

  status:[
    "PENDING",
    "COMPLETED",
    "FAILED"
  ],

  fields:{
    id:"string",
    userId:"string",
    amount:"number",
    currency:"string",
    type:"string",
    reference:"string",
    timestamp:"timestamp"
  }

});

export default TransactionRecord;
