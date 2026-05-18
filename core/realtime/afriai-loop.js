const { deliver } = require("../../whatsapp-gateway/core/delivery/deliveryEngine");

async function afriAiLoop(message, from) {
  try {
    console.log("🧠 AI INPUT:", message);

    // TEMP AI RESPONSE (replace with real model later)
    const reply = `🤖 AfriAI: I received -> ${message}`;

    await deliver(from, reply);

    return { ok: true };
  } catch (e) {
    console.error("AI LOOP ERROR:", e);
    return { ok: false };
  }
}

module.exports = afriAiLoop;
