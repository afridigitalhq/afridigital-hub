const PaymentContract = Object.freeze({

  id: "PAYMENT_ID",

  methods: [
    "AFRICOIN",
    "NATIVE",
    "CRYPTO"
  ],

  status: [
    "PENDING",
    "PROCESSING",
    "COMPLETED",
    "FAILED"
  ],

  fields: {
    userId: "string",
    amount: "number",
    currency: "string",
    method: "string",
    provider: "string",
    reference: "string",
    createdAt: "timestamp"
  }

});

export default PaymentContract;
