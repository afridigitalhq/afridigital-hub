import React, { useEffect, useState } from "react";

export default function BootSequence({ onComplete }) {
  const [stage, setStage] = useState("booting");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("login"), 2000);
    const t2 = setTimeout(() => setStage("desktop"), 4000);
    const t3 = setTimeout(() => onComplete(), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className={`soc-boot ${stage}`}>
      <h1>🟦 SOC OS BOOTING...</h1>
      <p>Stage: {stage}</p>
    </div>
  );
}
