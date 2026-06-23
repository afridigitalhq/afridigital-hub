import { SOCVoiceEngine } from "../../voice/SOCVoiceEngine";

export function useSOCVoice(spine, interrupt) {
  const voice = new SOCVoiceEngine(spine, interrupt);

  return {
    voice,
    sendVoice: (cmd) => voice.listen(cmd)
  };
}
