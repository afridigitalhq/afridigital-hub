const startWorker = require("./core/delivery/worker");
startWorker();

const express = require('express');
const router = express.Router();

const normalizeMsg = require('./core/utils/normalizeMsg');

router.post('/webhook', (req, res) => {
  const msg = normalizeMsg(req.body);

  if (!msg || !msg.from) {
    return res.json({ ok: false, error: 'no msg' });
  }

  console.log('💬 MESSAGE TEXT:', msg.text, 'FROM:', msg.from);

  return res.json({ ok: true });
});

module.exports = router;

