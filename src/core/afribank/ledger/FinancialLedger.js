const ledger = [];

export default {

 record(transaction){

   ledger.push({
     ...transaction,
     timestamp:Date.now()
   });

   return transaction;

 },

 list(){

   return ledger;

 }

};
