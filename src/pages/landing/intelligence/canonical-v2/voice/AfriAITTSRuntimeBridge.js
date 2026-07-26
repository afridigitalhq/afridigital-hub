import afriAITTS from "./AfriAITTS";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";
import afriAIPresenceController from "../runtime/AfriAIPresenceController";

class AfriAITTSRuntimeBridge{

  constructor(){

    afriAITTS.subscribe((event)=>{

      if(event.type==="start"){
        afriAIPresenceController.speaking();
      }

      if(event.type==="end"){
        afriAIPresenceController.idle();
      }

      if(event.type==="error"){
        afriAIPresenceController.idle();
      }

    });

  }

  speak(text){
    afriAITTS.speak(text);
  }

}

export default new AfriAITTSRuntimeBridge();
