
import BrainModuleLoader from "./BrainModuleLoader.js";

const DEFAULT_MODULES=[
 "runtime",
 "orchestrator",
 "eventBus",
 "controlRoom",
 "afriai"
];

export default function bootstrapEcosystemModules(extraModules=[]){

 const registered=[];

 for(const name of [...DEFAULT_MODULES,...extraModules]){
  registered.push(
   BrainModuleLoader.load(name,{},{
    auto:true,
    source:"bootstrap"
   })
  );
 }

 return{
  status:"online",
  registered,
  count:registered.length,
  timestamp:Date.now()
 };
}
