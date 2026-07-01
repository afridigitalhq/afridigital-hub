
import BrainServiceRegistry from "./BrainServiceRegistry.js";

class BrainModuleLoader{

 static load(name,module={},meta={}){

  BrainServiceRegistry.installService(name,module,{
   type:"ecosystem-module",
   loaded:true,
   loadedAt:Date.now(),
   ...meta
  });

  return {
   module:name,
   status:"loaded",
   timestamp:Date.now()
  };
 }

 static unload(name){

  BrainServiceRegistry.uninstallService(name);

  return{
   module:name,
   status:"unloaded",
   timestamp:Date.now()
  };
 }

 static modules(){
  return BrainServiceRegistry.listServices();
 }

 static status(){
  return{
   loaded:this.modules().length,
   services:this.modules(),
   timestamp:Date.now()
  };
 }

}

export default BrainModuleLoader;
