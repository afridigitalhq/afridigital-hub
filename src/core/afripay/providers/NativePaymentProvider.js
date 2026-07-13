export default class NativePaymentProvider {

  pay(transaction){

    return {
      method: "NATIVE",
      status: "PROCESSING",
      provider: "PAYSTACK",
      transaction
    };

  }

}
