const delivery = require('./whatsapp-gateway/core/delivery/deliveryEngine');

async function sendWhatsAppMessage(payload) {
  // support both old + new formats
  let to, message;

  if (typeof payload === 'string') {
    throw new Error("OLD_STRING_SIGNATURE_NOT_SUPPORTED");
  }

  to = payload.to;
  message = payload.message;

  if (!to || !message) {
    throw new Error("INVALID_WHATSAPP_PAYLOAD");
  }

  return await delivery.deliver(to, message);
}

module.exports = sendWhatsAppMessage;
