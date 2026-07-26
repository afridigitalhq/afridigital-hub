import afriAITTSRuntimeBridge from "./AfriAITTSRuntimeBridge";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";

class AfriAITTSRuntimeConnector{

  constructor(){

    this.lastSpokenIndex=-1;

    afriAILandingRuntime.subscribe((state)=>{

      console.log("[AfriAI TTS State]",state.status,state.messages.length);

      const last =
        state.messages[state.messages.length - 1];

      const index = state.messages.length - 1;

      if(
        last &&
        last.role==="assistant" &&
        last.content &&
        index !== this.lastSpokenIndex
      ){

        this.lastSpokenIndex=index;

        console.log("[AfriAI TTS Speak]",last.content);

        afriAITTSRuntimeBridge.speak(
          last.content
        );

      }

    });

  }

}

export default new AfriAITTSRuntimeConnector();
