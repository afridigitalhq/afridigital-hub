import React from "react";

export default function AfriForexChart() {
  return (
    <section className="afriforex-panel afriforex-chart-panel">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">LIVE MARKET CHART</span>
          <h2>Waiting for live market data</h2>
        </div>
        <span className="afriforex-status">● NOT CONNECTED</span>
      </div>

      <div className="afriforex-chart-placeholder">
        <span>📈</span>
        <strong>Live market chart will appear here</strong>
        <p>
          Real price data will be connected when the Forex/Crypto provider is
          added.
        </p>
      </div>
    </section>
  );
}
