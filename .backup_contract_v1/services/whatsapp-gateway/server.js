const startWorker = require("./core/delivery/worker");
startWorker();

const express = require('express');
const router = express.Router();

const normalizeMsg = require('./core/utils/normalizeMsg');
const routeBrain = require('./core/brain/router');
const delivery = require('./core/delivery/deliveryEngine');

router.post('/webhook', async (req, res) => {
  try {
    const msg = normalizeMsg(req.body);

    if (!msg || !msg.from) {
      return res.json({ ok: false, error: 'no msg' });
    }

    console.log('💬 MESSAGE TEXT:', msg.text, 'FROM:', msg.from);

    const brain = routeBrain(msg.text);

    let reply = 'AFRIAI ACTIVE';

    if (brain && brain.processMessage) {
      const result = await brain.processMessage({
        body: {
          message: msg.text,
          from: msg.from
        }
      });

      reply = result?.reply || reply;
    }

    console.log('🧠 AI REPLY:', reply);

    await delivery.deliver(msg.from, reply);

    return res.json({
      ok: true,
      reply
    });

  } catch (e) {
    console.error('🔥 WHATSAPP WEBHOOK ERROR:', e);

    return res.status(500).json({
      ok: false,
      error: e.message
    });
  }
});

module.exports = router;
