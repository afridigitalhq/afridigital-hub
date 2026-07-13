const AuditTrail = [];

export default {

 log(event){

   AuditTrail.push({
     event,
     timestamp:Date.now()
   });

 },

 list(){

   return AuditTrail;

 }

};
