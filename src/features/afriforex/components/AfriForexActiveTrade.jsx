import React from "react";

const TRADE_FIELDS = [
  ["Direction", "—"],
  ["Entry", "—"],
  ["Stop Loss", "—"],
  ["Take Profit", "—"],
  ["Lot Size", "—"],
  ["Leverage", "—"],
  ["Margin Required", "—"],
  ["Risk Amount", "—"],
  ["Risk %", "—"],
  ["Reward / Risk", "—"],
  ["Confidence", "—"],
];

export default function AfriForexActiveTrade() {
  return (
    <section className="afriforex-panel afriforex-active-trade-card">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">ACTIVE DEMO TRADE</span>
          <h2>No active trade</h2>
        </div>
      </div>

      <div className="afriforex-trade-fields">
        {TRADE_FIELDS.map(([label, value]) => (
          <div className="afriforex-trade-field" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="afriforex-empty-state">
        AfriAI has not opened a demo position.
      </div>
    </section>
  );
}
