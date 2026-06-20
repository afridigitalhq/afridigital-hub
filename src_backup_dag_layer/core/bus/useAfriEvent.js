import { useEffect } from "react";
import { AfriBus } from "./AfriEventBus";

export function useAfriEvent(type, handler) {
  useEffect(() => {
    const unsub = AfriBus.on(type, handler);
    return () => unsub();
  }, [type, handler]);
}
