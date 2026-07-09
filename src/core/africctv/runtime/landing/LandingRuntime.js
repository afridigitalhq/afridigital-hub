import RuntimeContract from "../../contracts/RuntimeContract.js";
import LandingRuntimeContract from "../contracts/LandingRuntimeContract.js";
import LandingEventBus from "../events/LandingEventBus.js";

export default class LandingRuntime {
  constructor(){
    this.state=RuntimeContract.create();
    this.bus=new LandingEventBus();
  }

  update(payload){
    this.state={
      ...this.state,
      ...payload,
      timestamp:Date.now()
    };

    if(LandingRuntimeContract.validate(this.state)){
      this.bus.emit("runtime:update",this.state);
    }

    return this.state;
  }

  subscribe(callback){
    this.bus.on("runtime:update",callback);
    return ()=>this.bus.off("runtime:update",callback);
  }

  getState(){
    return this.state;
  }
}
