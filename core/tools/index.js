const delivery = require('../../services/whatsapp-gateway/core/delivery/deliveryEngine');

module.exports = {
  "whatsapp.send": async ({ to, message }) => {
    if (!to || !message) {
      throw new Error("INVALID_WHATSAPP_PAYLOAD");
    }
    return await delivery.deliver(to, message);
  },

  "memory.set": async ({ key, value }) => {
    global.__AFRI_MEMORY__ = global.__AFRI_MEMORY__ || {};
    global.__AFRI_MEMORY__[key] = value;

    console.log("🧠 MEMORY STORED:", key);

    return { stored: true };
  }
};
