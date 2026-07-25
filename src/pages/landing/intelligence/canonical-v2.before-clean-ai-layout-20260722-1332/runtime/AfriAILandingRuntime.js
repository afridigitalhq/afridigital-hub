/**
 * AfriAI Landing Runtime
 *
 * OWNER:
 * Runtime interactions and orchestration.
 *
 * RULE:
 * UI components do not contain intelligence logic.
 * Runtime owns events, transitions, and future AI connections.
 */

class AfriAILandingRuntime {

  constructor(){
    this.state = {
      status:"idle",
      listening:false,
      thinking:false,
      speaking:false
    };

    this.listeners = new Set();
  }


  subscribe(listener){
    this.listeners.add(listener);

    return ()=>{
      this.listeners.delete(listener);
    };
  }


  emit(){
    this.listeners.forEach(listener=>{
      listener(this.state);
    });
  }


  setStatus(status){

    this.state = {
      ...this.state,
      status,
      listening:status==="listening",
      thinking:status==="thinking",
      speaking:status==="speaking"
    };

    this.emit();
  }


  startListening(){
    this.setStatus("listening");
  }


  startThinking(){
    this.setStatus("thinking");
  }


  startSpeaking(){
    this.setStatus("speaking");
  }


  reset(){
    this.setStatus("idle");
  }

}


const afriAILandingRuntime = new AfriAILandingRuntime();

export default afriAILandingRuntime;
