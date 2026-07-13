import AfriCoinProvider from "../providers/AfriCoinProvider.js";
import NativePaymentProvider from "../providers/NativePaymentProvider.js";
import CryptoPaymentProvider from "../providers/CryptoPaymentProvider.js";

export default class AfriPayRouter {

  constructor(){

    this.providers = {
      AFRICOIN: new AfriCoinProvider(),
      NATIVE: new NativePaymentProvider(),
      CRYPTO: new CryptoPaymentProvider()
    };

  }


  process(transaction){

    const provider = this.providers[transaction.method];

    if(!provider){
      throw new Error("Unsupported payment method");
    }

    return provider.pay(transaction);

  }

}
