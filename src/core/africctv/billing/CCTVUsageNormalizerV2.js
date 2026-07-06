
export default class CCTVUsageNormalizerV2 {

  constructor() {
    this.sessions = new Map();
  }

  normalize(event) {

    if (!event || !event.sessionId) return null;

    const id = event.sessionId;

    if (!this.sessions.has(id)) {
      this.sessions.set(id, {
        count: 0,
        start: event.timestamp,
        last: event.timestamp
      });
    }

    const session = this.sessions.get(id);

    session.count += 1;
    session.last = event.timestamp;

    // compress high-frequency frames into billing unit
    if (session.count < 10) return null;

    const usagePacket = {
      type: "CCTV_COMPRESSED_USAGE",
      sessionId: id,
      frames: session.count,
      duration: session.last - session.start,
      source: "CCTV"
    };

    // reset session after compression
    this.sessions.set(id, {
      count: 0,
      start: event.timestamp,
      last: event.timestamp
    });

    return usagePacket;
  }
}
