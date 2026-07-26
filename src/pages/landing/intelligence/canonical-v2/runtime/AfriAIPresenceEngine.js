class AfriAIPresenceEngine{

  constructor(){
    this.current="idle";
    this.listeners=new Set();
  }

  subscribe(listener){
    this.listeners.add(listener);
    return ()=>this.listeners.delete(listener);
  }

  emit(){
    this.listeners.forEach(listener=>{
      listener(this.current);
    });
  }

  transition(state){

    this.current=state;

    this.emit();

  }

  wake(){
    this.transition("awakening");
  }

  listening(){
    this.transition("listening");
  }

  thinking(){
    this.transition("thinking");
  }

  speaking(){
    this.transition("speaking");
  }

  idle(){
    this.transition("idle");
  }

}

export default new AfriAIPresenceEngine();
