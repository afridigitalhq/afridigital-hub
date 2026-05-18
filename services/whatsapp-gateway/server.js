const express = require('express');
const router = express.Router();

const normalizeMsg = require('./core/utils/normalizeMsg');
const routeBrain = require('./core/brain/router');
const streamReply = require('./core/live/streamAI');

router.post('/webhook', async (req, res) => {
  try {
    const msg = normalizeMsg(req.body);

    if (!msg || !msg.from) {
      return res.json({ ok: false, error: 'no msg' });
    }

    console.log('💬 MESSAGE:', msg.text, msg.from);

    const brain = routeBrain(msg.text);

    let result = "AFRIAI ACTIVE";

    if (brain && brain.processMessage) {
      result = await streamReply(msg.from, brain.processMessage, msg);
    }

    console.log('🧠 FINAL:', result);

    return res.json({ ok: true, reply: result });

  } catch (e) {
    console.error('🔥 WEBHOOK ERROR:', e);
    return res.status(500).json({ ok: false, error: e.message });
  }
});

module.exports = router;
