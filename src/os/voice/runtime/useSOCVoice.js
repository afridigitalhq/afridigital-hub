import { useEffect, useRef } from "react";

export function useSOCVoice(orchestrator, narrator) {
  const voice = useRef(null);

  useEffect(() => {
    const { SOCVoiceGovernor } = require("./SOCVoiceGovernor");

    voice.current = new SOCVoiceGovernor({
      orchestrator,
      narrator
    });

    orchestrator.subscribe((event) => {
      voice.current.emit(event);
    });
  }, []);

  return voice;
}
