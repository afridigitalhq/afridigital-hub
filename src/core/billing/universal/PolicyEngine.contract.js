export default class PolicyEngine {

  evaluate(event) {

    const type = (event?.type || "").toUpperCase();

    // Default decision structure
    let decision = {
      allowed: true,
      strategy: null,
      pricingModel: "default",
      risk: "low"
    };

    // CCTV high-frequency stream logic
    if (type.includes("CCTV")) {
      decision.strategy = "CCTV";
      decision.pricingModel = "stream-metered";
      decision.risk = "medium";
    }

    // API usage logic
    else if (type.includes("API")) {
      decision.strategy = "API";
      decision.pricingModel = "request-based";
    }

    // Commerce logic
    else if (type.includes("COMMERCE")) {
      decision.strategy = "COMMERCE";
      decision.pricingModel = "transaction-based";
    }

    // Sports predictions
    else if (type.includes("SPORT")) {
      decision.strategy = "SPORTS";
      decision.pricingModel = "event-based";
    }

    // Work / freelance ecosystem
    else if (type.includes("WORK")) {
      decision.strategy = "WORK";
      decision.pricingModel = "task-based";
    }

    // Unknown event fallback (safe deny path)
    else {
      decision.allowed = false;
      decision.risk = "unknown";
    }

    return decision;
  }
}
