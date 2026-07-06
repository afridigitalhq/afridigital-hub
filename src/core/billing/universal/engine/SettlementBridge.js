
import AfriBankAdapter from "../adapters/AfriBankAdapter.js";

/**
 * SETTLEMENT BRIDGE
 * Final step: converts billing result → ledger entry
 */

export default class SettlementBridge {

  static commit(billingResult) {

    if (!billingResult) return null;

    return AfriBankAdapter.postTransaction({
      type: "billing_settlement",
      amount: billingResult.cost || 0,
      meta: billingResult
    });
  }
}
