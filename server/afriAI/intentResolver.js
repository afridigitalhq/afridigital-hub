export function resolveIntent(input) {
  const text = input.toLowerCase();

  let intent = "query";

  if (text.includes("deploy")) intent = "deploy";
  if (text.includes("simulate")) intent = "simulation";
  if (text.includes("why") || text.includes("error") || text.includes("slow")) intent = "diagnostic";

  return {
    rawInput: input,
    intent,
    confidence: 0.7,
    timestamp: Date.now()
  };
}
