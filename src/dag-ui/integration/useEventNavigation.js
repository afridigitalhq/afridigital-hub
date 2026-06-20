import { useState } from "react";

export function useEventNavigation(resolver) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onSelectEvent = (event) => {
    const resolved = resolver.resolve(event);
    setSelectedEvent(resolved);
  };

  return {
    selectedEvent,
    onSelectEvent
  };
}
