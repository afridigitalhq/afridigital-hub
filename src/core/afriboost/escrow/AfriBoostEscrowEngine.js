const AfriBoostEscrowEngine = {

 createEscrow(data){

   return {

    escrowId:
    "ESC-" +
    Math.random()
    .toString(36)
    .substring(2,10)
    .toUpperCase(),

    campaignId:data.campaignId,

    ownerId:data.ownerId,

    depositedAmount:data.amount,

    reservedAmount:0,

    availableBalance:data.amount,

    currency:"AFRICOiN",

    status:"ACTIVE"

   };

 },

 reserveReward(escrow,amount){

   if(escrow.availableBalance < amount){

     return {
       status:"FAILED",
       reason:"INSUFFICIENT_ESCROW"
     };

   }

   return {

     status:"RESERVED",

     reservedAmount:
     escrow.reservedAmount + amount

   };

 },

 releasePayment(data){

   return {

    escrowId:data.escrowId,

    workerId:data.workerId,

    submissionId:data.submissionId,

    amount:data.amount,

    currency:"AFRICOiN",

    status:"RELEASED",

    timestamp:Date.now()

   };

 }

};

export default AfriBoostEscrowEngine;
