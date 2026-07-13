export default class AfriCoinProvider {

  pay(transaction){

    return {
      method: "AFRICOIN",
      status: "PROCESSING",
      transaction
    };

  }

}
