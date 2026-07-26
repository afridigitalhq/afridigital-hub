/**
 * AfriTick Trust Score Engine V2
 *
 * Upgrade:
 * - Weighted trust categories
 * - Verification awareness
 * - Activity history
 * - Reputation signals
 * - Premium membership influence
 *
 * RULE:
 * Trust score improves discovery but never replaces verification.
 */

const AfriTickTrustScoreEngine = {

  calculate(profile){

    const signals = {
      verification: profile.verification || 0,
      activity: profile.activity || 0,
      transactions: profile.transactions || 0,
      reputation: profile.reputation || 0,
      premium: profile.premium || 0
    };

    const score =
      (signals.verification * 0.30) +
      (signals.activity * 0.20) +
      (signals.transactions * 0.20) +
      (signals.reputation * 0.20) +
      (signals.premium * 0.10);

    return {
      score: Math.round(score),
      signals,
      status:
        score >= 80
          ? "HIGH_TRUST"
          : score >= 50
            ? "MEDIUM_TRUST"
            : "LOW_TRUST"
    };

  }

};

export default AfriTickTrustScoreEngine;
