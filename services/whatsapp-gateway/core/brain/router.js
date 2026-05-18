const { addToQueue } = require("../delivery/queue");
const v4 = require('./v4/liveBrainV4');
const v5 = require('./v5/liveBrainV5');

function routeBrain(msg) {
  if (!msg || !msg.text) return v4;

  const text = msg.text.toLowerCase();

  // simple routing logic (upgrade later with ML scoring)
  if (text.includes('order') || text.includes('pay') || text.includes('buy')) {
    return v5;
  }

  return v4;
}

module.exports = routeBrain;
