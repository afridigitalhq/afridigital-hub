export const metrics = {
  cpu: 0,
  memory: 0,
  requests: 0,
  latency: 0,

  update(payload) {
    Object.assign(this, payload);
  }
};
