const SettlementLedger = [];

export default {

 add(entry){

  SettlementLedger.push(entry);

  return entry;

 },

 list(){

  return SettlementLedger;

 }

};
