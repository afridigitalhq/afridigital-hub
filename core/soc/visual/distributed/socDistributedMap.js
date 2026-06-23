export class SOCDistributedMap {

  build(nodes = []) {
    return nodes.map((n, i) => ({
      id: n,
      x: Math.sin(i) * 100,
      y: Math.cos(i) * 100,
      region: "virtual-cluster",
      load: Math.random()
    }));
  }
}
