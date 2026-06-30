import { useEffect } from "react";

export function useSocVoiceKernel({ onCommand }) {
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const last = event.results[event.results.length - 1];
      const command = last[0].transcript.toLowerCase();

      handleCommand(command);
    };

    const handleCommand = (cmd) => {
      // 🧠 GLOBAL SOC COMMAND MAPPING
      if (cmd.includes("war room")) {
        onCommand({ type: "SWITCH_DESKTOP", payload: "warroom" });
      }

      if (cmd.includes("dag")) {
        onCommand({ type: "SWITCH_DESKTOP", payload: "dag" });
      }

      if (cmd.includes("replay")) {
        onCommand({ type: "SWITCH_DESKTOP", payload: "replay" });
      }

      if (cmd.includes("forecast")) {
        onCommand({ type: "SWITCH_DESKTOP", payload: "forecast" });
      }

      if (cmd.includes("terminal")) {
        onCommand({ type: "SWITCH_DESKTOP", payload: "terminal" });
      }

      if (cmd.includes("panic mode")) {
        onCommand({ type: "TOGGLE_PANIC" });
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, [onCommand]);
}
