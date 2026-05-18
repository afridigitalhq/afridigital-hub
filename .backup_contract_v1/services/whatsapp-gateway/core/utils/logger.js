function log(type, msg, meta = {}) {
  console.log(JSON.stringify({
    time: new Date().toISOString(),
    type,
    msg,
    meta
  }));
}
module.exports = { log };
