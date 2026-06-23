export const eventTimeline = [];

export function recordEvent(event) {
  eventTimeline.push({
    ...event,
    timestamp: Date.now()
  });

  // keep last 50 events only (memory window)
  if (eventTimeline.length > 50) {
    eventTimeline.shift();
  }
}

export function getTimeline() {
  return eventTimeline;
}
