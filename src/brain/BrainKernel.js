import bootstrapEcosystemModules from "./BootstrapEcosystemModules.js";
import BrainModuleLoader from "./BrainModuleLoader.js";
import SystemState from "./SystemState.js";
import BrainDecisionRouter from "./BrainDecisionRouter.js";
export default class BrainKernel {
  constructor() {
    this.router=new BrainDecisionRouter(this);
    this.runtime = null;
    this.orchestrator = null;
    this.eventBus = null;
    this.modules = new Map();
  }

  connectRuntime(runtime) {
    this.runtime = runtime;
    return this;
  }

  connectOrchestrator(orchestrator) {
    this.orchestrator = orchestrator;
    return this;
  }

  connectEventBus(eventBus) {
    this.eventBus = eventBus;
    return this;
  }

  registerModule(name, module) {
    this.modules.set(name, module);
    return this;
  }

  getModule(name) {
    return this.modules.get(name);
  }

  status() {
    return {
      brain: "ACTIVE",
      runtime: !!this.runtime,
      orchestrator: !!this.orchestrator,
      eventBus: !!this.eventBus,
      modules: this.modules.size
    };
  }
}


BrainKernel.prototype.routeEvent=function(event){
  return this.router.route(event);
};

BrainKernel.prototype.registerDecision=function(type,handler){
  this.router.register(type,handler);
};


BrainKernel.prototype.registerCoreEvents=function(){

  this.registerDecision("runtime.boot",e=>({
    target:"runtime",
    accepted:true,
    payload:e
  }));

  this.registerDecision("orchestrator.online",e=>({
    target:"orchestrator",
    accepted:true,
    payload:e
  }));

  this.registerDecision("eventbus.online",e=>({
    target:"eventbus",
    accepted:true,
    payload:e
  }));

  this.registerDecision("runtime.shutdown",e=>({
    target:"runtime",
    accepted:true,
    payload:e
  }));

  return true;

};


BrainKernel.prototype.updateSystemState=function(name,value){
  return SystemState.update(name,value);
};

BrainKernel.prototype.getSystemState=function(name){
  return SystemState.get(name);
};

BrainKernel.prototype.getSystemSnapshot=function(){
  return SystemState.snapshot();
};


BrainKernel.prototype.syncCoreState=function(event){

  if(!event||!event.type) return false;

  const map={
    "runtime.boot":["runtime","online"],
    "runtime.shutdown":["runtime","offline"],
    "orchestrator.online":["orchestrator","online"],
    "eventbus.online":["eventBus","online"]
  };

  const target=map[event.type];

  if(target){
    this.updateSystemState(target[0],target[1]);
    return true;
  }

  return false;
};



BrainKernel.prototype.heartbeat=function(){
  return {
    timestamp:Date.now(),
    status:"alive",
    state:this.getSystemSnapshot(),
    runtime:this.getSystemState("runtime"),
    orchestrator:this.getSystemState("orchestrator"),
    eventBus:this.getSystemState("eventBus")
  };
};

BrainKernel.prototype.loadModule=function(name,module={},meta={}){
 return BrainModuleLoader.load(name,module,meta);
};

BrainKernel.prototype.unloadModule=function(name){
 return BrainModuleLoader.unload(name);
};

BrainKernel.prototype.getLoadedModules=function(){
 return BrainModuleLoader.modules();
};



BrainKernel.prototype.bootstrapModules=function(extraModules=[]){
 return bootstrapEcosystemModules(extraModules);
};

