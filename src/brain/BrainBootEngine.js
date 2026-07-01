import BrainExecutionPlanner from "./BrainExecutionPlanner.js";

import BrainStartupSequencer from "./BrainStartupSequencer.js";

class BrainBootEngine{

 static boot(extra=[]){

 const plan=BrainExecutionPlanner.plan(extra);

 return{
  status:"booted",
  plan,
  executed:true,
  serviceCount:plan.serviceCount,
  startedAt:Date.now()
 };

 }

 static status(extra=[]){
  return this.boot(extra);
 }

}

export default BrainBootEngine;
