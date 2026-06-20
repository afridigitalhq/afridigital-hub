export const AfriSync = {
  peers: [],

  broadcast(event) {
    this.peers.forEach(p => {
      try { p.send(JSON.stringify(event)); } catch {}
    });
  },

  attach(socket) {
    this.peers.push(socket);
  }
};
