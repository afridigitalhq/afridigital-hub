const { processQueue } = require('./queue');
const delivery = require('./deliveryEngine');

function startWorker() {
  setInterval(() => {
    processQueue(delivery.deliver);
  }, 2000);
}

module.exports = startWorker;
