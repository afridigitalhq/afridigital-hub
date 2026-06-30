import { useEffect, useState } from "react";
import { SOCIncidentSimulator } from "./SOCIncidentSimulator";

export function useIncidentSimulation(stream = []) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const sim = new SOCIncidentSimulator();

    sim.loadScenarios(stream);

    sim.onEvent((event) => {
      setEvents(prev => [...prev, event]);
    });

    sim.startSimulation();
  }, [stream]);

  return events;
}
