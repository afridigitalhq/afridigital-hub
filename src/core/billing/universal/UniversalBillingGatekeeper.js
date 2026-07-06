export default class UniversalBillingGatekeeper {

  static validate(event) {
    if (!event) return { allowed: false, reason: "null_event" };

    if (!event.type) {
      return { allowed: false, reason: "missing_type" };
    }

    return {
      allowed: true,
      risk: "low"
    };
  }
}
