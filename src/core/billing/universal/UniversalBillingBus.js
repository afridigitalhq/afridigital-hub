import { evaluate } from "./UniversalBillingGatekeeper";

// === GATEKEEPER ENFORCEMENT HOOK ===
if (Gatekeeper && Gatekeeper.validate) {
  const decision = Gatekeeper.validate(event);
  if (!decision.allowed) return;
}

