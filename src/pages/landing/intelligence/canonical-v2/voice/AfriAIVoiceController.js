import speechAdapter from "./AfriAISpeechAdapter";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";
import afriAIPresenceController from "../runtime/AfriAIPresenceController";

class AfriAIVoiceController{

  constructor(){
    this.listeners=new Set();

    speechAdapter.subscribe((event)=>{
      this.handleSpeechEvent(event);
    });
  }

  subscribe(listener){
    this.listeners.add(listener);
    return ()=>this.listeners.delete(listener);
  }

  emit(event){
    this.listeners.forEach(listener=>listener(event));
  }

  start(){
    afriAIPresenceController.listening();
    speechAdapter.start();
  }

  stop(){
    speechAdapter.stop();
    afriAIPresenceController.idle();
  }

  async handleSpeechEvent(event){

    if(event.type==="transcript"){
      this.emit(event);

      if(event.value.trim()){
        await afriAILandingRuntime.sendMessage(
          event.value.trim()
        );
      }
    }

    if(event.type==="unsupported"){
      this.emit({
        type:"error",
        message:"Voice recognition is not supported on this browser."
      });
    }

    if(event.type==="error"){
      this.emit({
        type:"error",
        message:"Voice recognition error."
      });
    }

  }

}

export default new AfriAIVoiceController();
