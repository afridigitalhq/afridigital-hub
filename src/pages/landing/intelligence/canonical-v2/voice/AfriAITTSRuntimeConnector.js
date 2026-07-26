import afriAITTSRuntimeBridge from "./AfriAITTSRuntimeBridge";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";

class AfriAITTSRuntimeConnector{

  constructor(){

    afriAILandingRuntime.subscribe((state)=>{

      const last =
        state.messages[state.messages.length - 1];

      if(
        last &&
        last.role==="assistant" &&
        state.status==="speaking"
      ){

        afriAITTSRuntimeBridge.speak(
          last.content
        );

      }

    });

  }

}

export default new AfriAITTSRuntimeConnector();
