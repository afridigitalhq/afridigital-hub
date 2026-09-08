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
  selectedMarket = "",
  onMarketChange
}) {
  return (
    <div className="afriforex-market-selector-main">
      <span className="afriforex-label">MARKET</span>
      <select
        value={selectedMarket || ""}
        onChange={(event) => onMarketChange?.(event.target.value || null)}
        aria-label="Select AfriForex market"
      >
        <option value="">Select market</option>
        {MARKETS.map((market) => (
          <option key={market} value={market}>
            {market}
          </option>
        ))}
      </select>
    </div>
  );
}
