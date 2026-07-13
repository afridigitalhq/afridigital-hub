export default class SettlementEngine {

  createSettlement(order){

    return {
      orderId:order.id,
      sellerId:order.sellerId,
      status:"HELD_ESCROW"
    };

  }

  releaseSettlement(settlement){

    return {
      ...settlement,
      status:"RELEASED"
    };

  }

}
