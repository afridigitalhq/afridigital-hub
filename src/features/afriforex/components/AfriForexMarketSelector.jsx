import React from "react";

const MARKETS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "XAU/USD",
  "AAPL",
  "XRP/USDT"
];

export default function AfriForexMarketSelector({
  selectedMarket = null,
  onMarketChange
}) {
  return (
    <section className="afriforex-market-selector">
      <div>
        <span className="afriforex-label">MARKET</span>
        <select
          value={selectedMarket || ""}
          onChange={(event) => onMarketChange?.(event.target.value)}
          aria-label="Select AfriForex market"
        >
          {!selectedMarket && <option value="">Select market</option>}
          {MARKETS.map((market) => (
            <option key={market} value={market}>
              {market}
            </option>
          ))}
        </select>
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
