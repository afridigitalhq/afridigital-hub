export default class CryptoPaymentProvider {

  pay(transaction){

    return {
      method: "CRYPTO",
      status: "PROCESSING",
      transaction
    };

  }

}
