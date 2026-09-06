import React from "react";

export default function AfriForexDemoBalance() {
  return (
    <section className="afriforex-panel afriforex-balance-card">
      <span className="afriforex-label">DEMO ACCOUNT</span>
      <h2>$1,000.00</h2>
      <div className="afriforex-balance-row">
        <span>Balance</span>
        <strong>$1,000.00</strong>
      </div>
      <div className="afriforex-balance-row">
        <span>Equity</span>
        <strong>—</strong>
      </div>
      <button type="button" className="afriforex-topup-button">
        Top Up Demo
      </button>
    </section>
  );
}
