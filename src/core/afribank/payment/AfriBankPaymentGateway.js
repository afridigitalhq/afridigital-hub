const AfriBankPaymentGateway = {

  requestPayment(order){

    return {
      status:"PENDING",
      provider:"AFRIBANK",
      methods:[
        "AFRICOIN",
        "NATIVE",
        "CRYPTO"
      ],
      order
    };

  }

};

export default AfriBankPaymentGateway;
