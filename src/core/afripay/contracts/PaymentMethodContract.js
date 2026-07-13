const PaymentMethodContract = Object.freeze({

  AFRICOIN: {
    type: "INTERNAL_CURRENCY",
    owner: "AFRIBANK"
  },

  NATIVE: {
    type: "FIAT",
    owner: "AFRIBANK"
  },

  CRYPTO: {
    type: "DIGITAL_ASSET",
    owner: "AFRIBANK"
  }

});

export default PaymentMethodContract;
