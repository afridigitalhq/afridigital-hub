import speechAdapter from "./AfriAISpeechAdapter";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";
import afriAIPresenceController from "../runtime/AfriAIPresenceController";
import afriAIAudioAnalyzer from "./AfriAIAudioAnalyzer";

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
    afriAIAudioAnalyzer.start();
    speechAdapter.start();
  }

  stop(){
    speechAdapter.stop();
    afriAIAudioAnalyzer.stop();
    afriAIPresenceController.idle();
  }

  async handleSpeechEvent(event){

    if(event.type==="start"){
      afriAIPresenceController.listening();
    }

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

    if(event.type==="end"){
      afriAIPresenceController.idle();
    }

    if(event.type==="error"){
      afriAIPresenceController.idle();

      this.emit({
        type:"error",
        message:"Voice recognition error."
      });
    }

  }

}

export default new AfriAIVoiceController();
