export default class CCTVSimulationPack {

  static generate() {
    return [
      { source: "africctv", type: "CCTV", userId: "u1", resolution: "low" },
      { source: "africctv", type: "CCTV", userId: "u2", resolution: "high" },
      { source: "africctv", type: "CCTV", userId: "u3", resolution: "medium" }
    ];
  }
}
