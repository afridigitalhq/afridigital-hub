import React from "react";

export default function AfriForexTradeAlert() {
  return (
    <section className="afriforex-panel afriforex-alert-panel">
      <div className="afriforex-alert-content">
        <span className="afriforex-label">AFRIAI TRADE ALERT</span>

        <div className="afriforex-alert-signal">
          <span className="afriforex-neutral-badge">NEUTRAL</span>
        </div>

        <h2>Neutral (no active trade)</h2>
        <p>AfriAI is waiting for live market evidence.</p>

        <div className="afriforex-signal-scale" aria-label="AfriAI trading signal scale">
          <div className="afriforex-signal-track">
            <span className="afriforex-signal-marker" />
          </div>

          <div className="afriforex-signal-labels">
            <span>STRONG BUY</span>
            <span>BUY</span>
            <span>NEUTRAL</span>
            <span>SELL</span>
            <span>STRONG SELL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
