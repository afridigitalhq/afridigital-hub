import React from "react";

export default function AfriForexMarketSelector() {
  return (
    <section className="afriforex-market-selector">
      <div>
        <span className="afriforex-label">MARKET</span>
        <strong>Waiting for live market data</strong>
      </div>
      <div>
        <span className="afriforex-label">PRIMARY</span>
        <strong>4H</strong>
      </div>
      <div>
        <span className="afriforex-label">CONFIRMATION</span>
        <strong>1H</strong>
      </div>
      <div>
        <span className="afriforex-label">ENTRY</span>
        <strong>15M</strong>
      </div>
      <div>
        <span className="afriforex-label">MODE</span>
        <strong>Adaptive</strong>
      </div>
    </section>
  );
}
