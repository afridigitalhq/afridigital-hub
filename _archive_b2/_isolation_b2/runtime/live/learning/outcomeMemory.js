export const outcomeMemory = [];

export function recordOutcome(event, prediction) {
  outcomeMemory.push({
    eventType: event?.intent || event?.type,
    predicted: prediction?.next,
    timestamp: Date.now()
  });

  if (outcomeMemory.length > 100) {
    outcomeMemory.shift();
  }
}

export function getOutcomes() {
  return outcomeMemory;
}
