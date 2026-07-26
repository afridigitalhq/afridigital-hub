import afriAIAudioAnalyzer from "./AfriAIAudioAnalyzer";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";
import smoother from "./AfriAIVoiceLevelSmoother";

class AfriAIVoiceRuntimeBridge{

  constructor(){

    afriAIAudioAnalyzer.subscribe((level)=>{

      afriAILandingRuntime.setVoiceLevel(
        smoother.update(level)
      );

    });

  }

}

export default new AfriAIVoiceRuntimeBridge();
