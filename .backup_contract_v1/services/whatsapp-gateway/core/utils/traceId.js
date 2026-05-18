module.exports = function traceId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
};
