import React from "react";

export default function AfriForexTradeAlert() {
  return (
    <section className="afriforex-panel afriforex-alert-panel">
      <div>
        <span className="afriforex-label">AFRIAI TRADE ALERT</span>
        <h2>Neutral (no active trade)</h2>
        <p>AfriAI is waiting for live market evidence.</p>
      </div>
      <span className="afriforex-neutral-badge">NEUTRAL</span>
    </section>
  );
}
