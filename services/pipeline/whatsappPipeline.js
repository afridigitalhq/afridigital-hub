const afriaiAgent = require("../afriai.agent");

async function whatsappPipeline({ message, from }) {

  console.log("📡 PIPELINE (RENDER):", message, from);

  const aiReply = await afriaiAgent({
    input: message,
    user: from
  });

  await sendWhatsAppMessage({
    to: from,
    message: aiReply.text
  });

  return {
    ok: true,
    delivered: true,
    ai: aiReply.text
  };
}

module.exports = whatsappPipeline;
