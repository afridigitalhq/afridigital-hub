import BrainKernel from "./BrainKernel.js";

let brainInstance = null;

export function getBrainKernel() {
  if (!brainInstance) {
    brainInstance = new BrainKernel();
  }
  return brainInstance;
}

export function registerBrainKernel(runtime = {}, orchestrator = {}, eventBus = {}) {
  const brain = getBrainKernel();

  if (typeof brain.registerRuntime === "function") {
    brain.registerRuntime(runtime);
  }

  if (typeof brain.registerOrchestrator === "function") {
    brain.registerOrchestrator(orchestrator);
  }

  if (typeof brain.registerEventBus === "function") {
    brain.registerEventBus(eventBus);
  }

  return brain;
}

export default getBrainKernel;


export function connectCoreSystems({
  runtime={},
  orchestrator={},
  eventBus={}
}={}){

  const brain=getBrainKernel();

  registerBrainKernel(runtime,orchestrator,eventBus);

  return {
    brain,
    runtime,
    orchestrator,
    eventBus,
    status:"connected"
  };
}


export function dispatchBrainEvent(type,payload={}){

  const brain=getBrainKernel();

  if(!brain.events){
    brain.events=[];
  }

  const event={
    type,
    payload,
    timestamp:Date.now()
  };

  brain.events.push(event);

  return event;
}

export function getBrainEvents(){

  const brain=getBrainKernel();

  return brain.events||[];
}
