export default class CommercePaymentBridge {

  constructor(paymentRouter, ledger){

    this.paymentRouter = paymentRouter;
    this.ledger = ledger;

  }


  checkout(transaction){

    const payment =
      this.paymentRouter.process(transaction);

    this.ledger.record({

      ...transaction,

      paymentStatus:payment.status,

      paymentMethod:payment.method

    });

    return payment;

  }

}
