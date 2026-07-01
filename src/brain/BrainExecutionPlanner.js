
import BrainStartupSequencer from "./BrainStartupSequencer.js";
import BrainDependencyResolver from "./BrainDependencyResolver.js";

class BrainExecutionPlanner{

 static plan(extra=[]){

  const services=BrainStartupSequencer.sequence(extra);

  const executionPlan=services.map(service=>
   BrainDependencyResolver.resolve(service)
  );

  return{
   status:"planned",
   executionPlan,
   serviceCount:executionPlan.length,
   timestamp:Date.now()
  };

 }

 static status(extra=[]){
  return this.plan(extra);
 }

}

export default BrainExecutionPlanner;
