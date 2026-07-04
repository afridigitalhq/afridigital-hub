import { useEffect, useState } from "react";
import { systemBoot } from "./bootstrap/systemBoot";

export function useProductionSafeSystem() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    systemBoot({ setReady });
  }, []);

  return { ready };
}
