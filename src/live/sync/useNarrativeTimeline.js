import { useEffect, useState } from "react";

export function useNarrativeTimeline(frame) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!frame?.event) return;

    const type = frame.event.intent || frame.event.type;

    if (type === "simulation") {
      setText(`Frame ${frame.frame}: Infrastructure simulation in progress...`);
    } else if (type === "deploy") {
      setText(`Frame ${frame.frame}: Deployment sequence active...`);
    } else {
      setText(`Frame ${frame.frame}: System event processed.`);
    }
  }, [frame]);

  return text;
}
