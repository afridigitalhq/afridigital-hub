
export const STARTUP_SEQUENCE=[
 "eventBus",
 "runtime",
 "orchestrator",
 "brainKernel",
 "controlRoom",
 "afriai"
];

class BrainStartupSequencer{

 static sequence(extra=[]){
  return [...STARTUP_SEQUENCE,...extra];
 }

 static status(extra=[]){
  const order=this.sequence(extra);

  return{
   status:"sequenced",
   services:order,
   count:order.length,
   timestamp:Date.now()
  };
 }

}

export default BrainStartupSequencer;
