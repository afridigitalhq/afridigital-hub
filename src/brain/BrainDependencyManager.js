
class BrainDependencyManager{

 static dependencies={
  runtime:[],
  eventBus:[],
  orchestrator:["runtime","eventBus"],
  brainKernel:["runtime","orchestrator"],
  controlRoom:["brainKernel"],
  afriai:["brainKernel","controlRoom"]
 };

 static get(service){
  return this.dependencies[service]||[];
 }

 static has(service){
  return Object.prototype.hasOwnProperty.call(this.dependencies,service);
 }

 static list(){
  return this.dependencies;
 }

 static status(){
  return{
   status:"ready",
   services:Object.keys(this.dependencies),
   count:Object.keys(this.dependencies).length,
   timestamp:Date.now()
  };
 }

}

export default BrainDependencyManager;
