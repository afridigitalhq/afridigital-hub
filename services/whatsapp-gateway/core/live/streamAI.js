const { deliver } = require('../delivery/deliveryEngine');

async function streamReply(to, brainFn, msg) {
  try {
    await deliver(to, "🤖 Thinking...");

    await new Promise(r => setTimeout(r, 700));

    await deliver(to, "🧠 Processing...");

    const result = await brainFn({
      body: {
        message: msg.text,
        from: msg.from
      }
    });

    const reply = result?.reply || "AFRIAI ACTIVE";

    await deliver(to, reply);

    return reply;

  } catch (e) {
    console.error("STREAM ERROR:", e);
    await deliver(to, "⚠️ Error processing request");
  }
}

module.exports = streamReply;
