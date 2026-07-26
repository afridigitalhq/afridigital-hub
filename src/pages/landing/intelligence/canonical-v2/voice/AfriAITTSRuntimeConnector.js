import afriAITTSRuntimeBridge from "./AfriAITTSRuntimeBridge";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";

class AfriAITTSRuntimeConnector{

  constructor(){

    this.lastSpoken="";

    afriAILandingRuntime.subscribe((state)=>{

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

        afriAITTSRuntimeBridge.speak(
          last.content
        );

      }

    });

  }

}

export default new AfriAITTSRuntimeConnector();
