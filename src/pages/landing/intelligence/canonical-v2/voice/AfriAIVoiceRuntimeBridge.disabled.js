import afriAIAudioAnalyzer from "./AfriAIAudioAnalyzer";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";
import smoother from "./AfriAIVoiceLevelSmoother";

class AfriAIVoiceRuntimeBridge{

  constructor(){

    afriAIAudioAnalyzer.subscribe((level)=>{

      afriAILandingRuntime.state={
        ...afriAILandingRuntime.state,
        voiceLevel:smoother.update(level)
      };

      afriAILandingRuntime.emit();

    });

  }

}

export default new AfriAIVoiceRuntimeBridge();
