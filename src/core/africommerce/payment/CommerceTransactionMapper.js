export default {

 map(order){

   return {

    id:order.id,

    sellerId:order.sellerId,

    buyerId:order.buyerId,

    amount:order.amount,

    currency:order.currency

   };

 }

};
