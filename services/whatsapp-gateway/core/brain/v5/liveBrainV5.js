async function async function liveBrainV5(req) {
  const { sendWhatsApp } = require('../../delivery/deliveryEngine');

  const body = req.body;
  const msg = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

  if (!msg) return null;

  const from = msg.from;
  const text = msg?.text?.body || "";

  let reply = "AFRIAI V5 ACTIVE";

  try {
    await sendWhatsApp(from, reply);
    return { reply };
  } catch (e) {
    console.error("V5 ERROR:", e);
    return { reply: "ERROR" };
  }
}

module.exports = liveBrainV5;
