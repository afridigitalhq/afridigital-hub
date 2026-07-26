import afriAITTSRuntimeBridge from "./AfriAITTSRuntimeBridge";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";

class AfriAITTSRuntimeConnector{

  constructor(){

    this.lastSpoken="";

    afriAILandingRuntime.subscribe((state)=>{

      console.log("[AfriAI TTS State]",state.status,state.messages.length);

      const last =
        state.messages[state.messages.length - 1];

      if(
        last &&
        last.role==="assistant" &&
        state.status==="speaking" &&
        last.content &&
        last.content!==this.lastSpoken
      ){

        this.lastSpoken=last.content;

        console.log("[AfriAI TTS Speak]",last.content);

        afriAITTSRuntimeBridge.speak(
          last.content
        );

      }

    });

  }

}

export default new AfriAITTSRuntimeConnector();
