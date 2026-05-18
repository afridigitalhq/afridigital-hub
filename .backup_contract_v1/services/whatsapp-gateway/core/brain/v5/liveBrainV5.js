const traceId = require('../utils/traceId');
const sendWhatsApp = require("../../../../unified/index.js").unified;

async function liveBrainV5(req) {
  const id = String(traceId());

  try {
    const from = req.from;
    const reply = req.message || "empty";

    await sendWhatsApp({
      to: from,
      message: reply
    });

    return { reply };

  } catch (e) {
    console.error("V5 ERROR:", e);
    return { reply: "ERROR" };
  }
}

module.exports = liveBrainV5;
