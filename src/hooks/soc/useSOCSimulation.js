export function useSOCSimulation() {
  // UI must NEVER instantiate engines
  // Only consume API stream

  return {
    subscribe: () => {},
    state: null
  };
}
