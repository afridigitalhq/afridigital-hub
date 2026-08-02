import { useEffect, useState } from "react";
import { AfriBus } from "../../../core/runtime/AfriEventBus";

export function useDagStream() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const handler = (event) => {
      setEvents((prev) => [...prev.slice(-200), event]);
    };

    AfriBus.on("emit", handler);
    AfriBus.on("dag:event", handler);

    return () => {
      AfriBus.off?.("emit", handler);
      AfriBus.off?.("dag:event", handler);
    };
  }, []);

  return events;
}
