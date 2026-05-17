const brain = require('../../core/brain/v3');
const delivery = require('./core/delivery/deliveryEngine');

function extractMessage(body) {
console.log('💬 MESSAGE TEXT:', msg?.text?.body, 'FROM:', msg?.from);
console.log('📦 RAW BODY:', JSON.stringify(req.body));
console.log('📦 WEBHOOK BODY:', JSON.stringify(req.body, null, 2));
  return body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0] || null;
}

module.exports = async (req, res) => {
console.log('📡 WEBHOOK HIT RAW:', req.method, req.url);
  try {
    const msg = extractMessage(req.body);
console.log('💬 MESSAGE TEXT:', msg?.text?.body, 'FROM:', msg?.from);
console.log('💬 MESSAGE:', msg?.text?.body, 'FROM:', msg?.from);
console.log('📦 RAW BODY:', JSON.stringify(req.body));
console.log('💬 EXTRACTED MSG:', msg);
console.log('📦 WEBHOOK BODY:', JSON.stringify(req.body, null, 2));

    if (!msg || !msg.from) {
      return res.status(400).json({
        ok: false,
        error: "INVALID_WEBHOOK_PAYLOAD"
      });
    }

    const to = msg.from;
    const text = msg.text?.body || "";

    const result = await brain.processMessage(
      { body: { message: text, from: to } },
      res
    );

      await delivery.deliver(to, result.reply);

    return res.json({
      ok: true,
      delivered: true
    });

  } catch (e) {
    console.error("🔥 WHATSAPP GATEWAY ERROR:", e);
    return res.status(500).json({
      ok: false,
      error: e.message
    });
  }
};
