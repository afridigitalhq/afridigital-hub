
import BrainDependencyManager from "./BrainDependencyManager.js";

class BrainDependencyResolver{

 static resolve(service){

  const deps=BrainDependencyManager.get(service);

  return{
   service,
   dependencies:deps,
   resolved:true,
   dependencyCount:deps.length,
   timestamp:Date.now()
  };

 }

 static status(service){
  return this.resolve(service);
 }

}

export default BrainDependencyResolver;
