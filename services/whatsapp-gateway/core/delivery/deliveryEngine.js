const axios = require("axios");

async function deliver(to, message) {
  try {
    if (!to || !message) throw new Error("INVALID_DELIVERY_PAYLOAD");

    console.log("📤 REAL WHATSAPP SEND INITIATED");

    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${process.env.WA_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: message }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WA_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ WHATSAPP SENT:", response.data);

    return { ok: true, delivered: true, response: response.data };

  } catch (e) {
    console.error("🔥 DELIVERY ERROR:", e.response?.data || e.message);

    return {
      ok: false,
      error: e.message
    };
  }
}

module.exports = { deliver };
