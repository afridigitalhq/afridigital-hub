import afriAILandingRuntime from "./AfriAILandingRuntime";

class AfriAIPresenceController{

  idle(){
    afriAILandingRuntime.setStatus("idle");
  }

  listening(){
    afriAILandingRuntime.setStatus("listening");
  }

  thinking(){
    afriAILandingRuntime.setStatus("thinking");
  }

  speaking(){
    afriAILandingRuntime.setStatus("speaking");
  }

  setVoiceLevel(level){
    afriAILandingRuntime.setVoiceLevel(level);
  }

}

export default new AfriAIPresenceController();
