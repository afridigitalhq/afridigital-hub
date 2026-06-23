export function parseSocCommand(input) {
  const text = input.toLowerCase();

  // 🧠 DESKTOP ROUTING
  if (text.includes("open war room")) return { type: "DESKTOP", payload: "warroom" };
  if (text.includes("open dag")) return { type: "DESKTOP", payload: "dag" };
  if (text.includes("show replay")) return { type: "DESKTOP", payload: "replay" };
  if (text.includes("forecast")) return { type: "DESKTOP", payload: "forecast" };
  if (text.includes("terminal")) return { type: "DESKTOP", payload: "terminal" };

  // 🔥 PANIC / ALERT
  if (text.includes("panic")) return { type: "UI_MODE", payload: "panic" };

  // 📊 INCIDENT VIEW
  if (text.includes("incident")) return { type: "INCIDENT_VIEW", payload: "auto" };

  // 🌐 DEFAULT
  return { type: "UNKNOWN", payload: text };
}
