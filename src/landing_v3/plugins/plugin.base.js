export function definePlugin(config) {
  return {
    id: config.id,
    type: config.type,
    status: config.status || "active",
    mountPoint: config.mountPoint,
    render: config.render || (() => null)
  };
}
