import { useState } from "react";

export function useSOCBoot() {
  const [booted, setBooted] = useState(false);

  function finishBoot() {
    setBooted(true);
  }

  return { booted, finishBoot };
}
