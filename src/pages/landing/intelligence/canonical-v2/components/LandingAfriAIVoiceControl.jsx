import afriAITTS from "../voice/AfriAITTS";
import {useState} from "react";

export default function LandingAfriAIVoiceControl(){

  const [muted,setMuted]=useState(
    afriAITTS.isMuted()
  );

  function toggle(){

    const state=afriAITTS.toggleMute();

    setMuted(state);

  }

  return(
    <button
      type="button"
      className="landing-afriai-voice-control"
      onClick={toggle}
      aria-label="Toggle AfriAI voice"
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );

}
