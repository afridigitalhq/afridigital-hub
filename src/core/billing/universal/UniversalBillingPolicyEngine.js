export default class UniversalBillingPolicyEngine {

  static evaluate(event) {
    const type = (event?.type || "").toUpperCase();

    let decision = {
      allowed: true,
      strategy: null,
      pricingModel: "default",
      risk: "low"
    };

    if (type.includes("CCTV")) {
      decision.strategy = "CCTV";
      decision.pricingModel = "stream-metered";
      decision.risk = "medium";
    }

    else if (type.includes("API")) {
      decision.strategy = "API";
      decision.pricingModel = "request-based";
    }

    else if (type.includes("COMMERCE")) {
      decision.strategy = "COMMERCE";
    }

    else if (type.includes("SPORT")) {
      decision.strategy = "SPORTS";
    }

    return decision;
  }
}
