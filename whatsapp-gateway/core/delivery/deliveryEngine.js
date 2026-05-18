const fetch = global.fetch;

async function deliver(to, text) {
  try {
    const url = `https://graph.facebook.com/v19.0/${process.env.WA_PHONE_NUMBER_ID}/messages`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.WA_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        text: { body: text }
      })
    });

    const data = await res.json();

    console.log('📤 WHATSAPP RESPONSE:', data);

    return { ok: true, data };

  } catch (e) {
    console.error('DELIVERY ERROR:', e);
    return { ok: false, error: e.message };
  }
}

module.exports = { deliver };
