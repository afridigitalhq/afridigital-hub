class SystemState{

  constructor(){
    this.state={
      runtime:"offline",
      orchestrator:"offline",
      eventBus:"offline",
      controlRoom:"offline",
      afriAI:"offline",
      app:"offline",
      admin:"offline"
    };
  }

  update(name,value){
    this.state[name]=value;
    return this.state;
  }

  get(name){
    return this.state[name];
  }

  snapshot(){
    return {...this.state};
  }

}

export default new SystemState();
