import React from "react";

function money(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  return `${number < 0 ? "-" : ""}$${Math.abs(number).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function number(value, decimals = 2) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "—";
  return numeric.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function price(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "—";
  return `$${numeric.toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  })}`;
}

export default function AfriForexActiveTrade({ account, loading }) {
  const position = Array.isArray(account?.positions) && account.positions.length > 0
    ? account.positions[0]
    : null;

  if (loading) {
    return (
      <section className="afriforex-panel afriforex-active-trade-card">
        <div className="afriforex-panel-heading">
          <div>
            <span className="afriforex-label">ACTIVE DEMO TRADE</span>
            <h2>Loading live trade…</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!position) {
    return (
      <section className="afriforex-panel afriforex-active-trade-card">
        <div className="afriforex-panel-heading">
          <div>
            <span className="afriforex-label">ACTIVE DEMO TRADE</span>
            <h2>No active trade</h2>
          </div>
        </div>
        <div className="afriforex-empty-state">
          AfriAI has not opened a demo position.
        </div>
      </section>
    );
  }

  const pnl = Number(position.unrealizedPnl);
  const pnlClass = pnl < 0 ? "is-negative" : pnl > 0 ? "is-positive" : "";

  const fields = [
    ["Position ID", position.positionId || "—"],
    ["Symbol", position.symbol || "—"],
    ["Direction", position.direction || "—"],
    ["Entry", price(position.entryPrice)],
    ["Current Price", price(position.currentPrice)],
    ["Quantity", `${number(position.quantity, 4)} ${position.quantityUnit || "units"}`],
    ["Lot Size", number(position.lotSize, 2)],
    ["Leverage", Number.isFinite(Number(position.leverage)) ? `${number(position.leverage, 0)}×` : "—"],
    ["Margin Required", money(position.marginRequired)],
    ["Risk Amount", money(position.riskAmount)],
    ["Risk %", Number.isFinite(Number(position.riskPercent)) ? `${number(position.riskPercent, 2)}%` : "—"],
    ["Reward / Risk", number(position.rewardRisk, 2)],
    ["Confidence", Number.isFinite(Number(position.confidence)) ? `${number(position.confidence, 0)}%` : "—"],
    ["Status", position.status || "—"],
    ["Valuation", position.valuationProvider || "—"]
  ];

  return (
    <section className="afriforex-panel afriforex-active-trade-card">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">ACTIVE DEMO TRADE</span>
          <h2>{position.symbol || "Active Position"} · {position.direction || "—"}</h2>
        </div>
        <span className="afriforex-label">{position.status || "OPEN"}</span>
      </div>

      <div className="afriforex-trade-fields">
        {fields.map(([label, value]) => (
          <div className="afriforex-trade-field" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="afriforex-trade-field">
        <span>Unrealized P/L · LIVE</span>
        <strong className={pnlClass}>{money(position.unrealizedPnl)}</strong>
      </div>

      <div className="afriforex-empty-state">
        Live valuation: {position.valuationStatus || "—"} · Provider: {position.valuationProvider || "—"} · Equity: {money(account?.equity)}
      </div>
    </section>
  );
}
