const AfriTickAfriCoinPayment = {

  createPayment(subscription){

    return {
      subscriptionId: subscription.id || null,
      currency: "AFRICOIN",
      amount: subscription.amount || 0,
      status: "PENDING",
      createdAt: Date.now()
    };

  },

  confirmPayment(payment){

    return {
      ...payment,
      status:"COMPLETED",
      confirmedAt:Date.now()
    };

  }

};

export default AfriTickAfriCoinPayment;
