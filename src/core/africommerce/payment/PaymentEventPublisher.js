const events=[];

export default {

 publish(event){

   events.push({

    event,

    timestamp:Date.now()

   });

 },

 list(){

   return events;

 }

};
