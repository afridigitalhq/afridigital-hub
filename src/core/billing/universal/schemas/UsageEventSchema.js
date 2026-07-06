
/**
 * IMMUTABLE BILLING EVENT CONTRACT
 */
export default class UsageEventSchema {

  static validate(event) {
    if (!event) return false;

    const required = [
      "source",
      "type",
      "userId",
      "timestamp"
    ];

    for (const key of required) {
      if (!event[key]) return false;
    }

    return true;
  }

  static normalize(event) {
    return {
      source: event.source,
      type: event.type,
      userId: event.userId,
      timestamp: event.timestamp || Date.now(),
      metadata: event.metadata || {}
    };
  }
}
