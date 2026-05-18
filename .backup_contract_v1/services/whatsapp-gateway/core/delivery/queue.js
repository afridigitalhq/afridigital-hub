const queue = [];

function addToQueue(job) {
  queue.push({ ...job, retries: 0 });
}

async function processQueue(deliverFn) {
  for (let job of queue) {
    try {
      await deliverFn(job.to, job.message);
    } catch (e) {
      job.retries++;
      if (job.retries < 3) {
        queue.push(job);
      }
    }
  }
}

module.exports = { addToQueue, processQueue };
