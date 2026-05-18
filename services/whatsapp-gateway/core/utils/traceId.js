module.exports = function traceId() {
  return String(Date.now()) + "-" + Math.random().toString(36).slice(2, 10);
};
