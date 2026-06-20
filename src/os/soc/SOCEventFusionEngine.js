export function SOCEventFusionEngine(os, { afriscan, narrator, monetization }) {

  if (!os) throw new Error("OS required");

  os.subscribe((event) => {

    const brainDecision = os.brain?.route?.(event);

    if (!brainDecision) return;

    // 🧠 CORE OS FLOW
    os.dag?.commit?.(event);
    os.registry?.validate?.(brainDecision.plugin);
    os.sidebar?.sync?.(brainDecision.ui);

    // 🛡️ AFRISCAN RISK LAYER
    if (afriscan?.analyze) {
      const risk = afriscan.analyze(event);
      if (risk?.severity === "high") {
        console.warn("🛡️ AFRISCAN ALERT:", risk);
      }
    }

    // 🔊 NARRATOR LAYER (SOC + BUSINESS MODE)
    if (narrator?.enabled) {
      const msg =
        brainDecision.narrator ||
        `Event processed: ${event.type}`;

      narrator.speak(msg);
    }

    // 💰 MONETIZATION TRIGGERS (SAFE LAYER ONLY)
    if (monetization?.evaluate) {
      monetization.evaluate(event, brainDecision);
    }
  });

  return {
    status: "SOC_FUSION_ACTIVE",
    mode: "REAL_TIME_WAR_ROOM"
  };
}
