import React, { useState } from "react";

function money(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  return `${number < 0 ? "-" : ""}$${Math.abs(number).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function signedMoney(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";

  return `${number >= 0 ? "+" : "-"}$${Math.abs(number).toLocaleString("en-US", {
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

function normalizeDirection(value) {
  const direction = String(value || "").toUpperCase();

  if (direction.includes("BUY")) return "BUY";
  if (direction.includes("SELL")) return "SELL";

  return "—";
}

function normalizeTrend(position) {
  const raw =
    position?.intelligence?.trend ||
    position?.intelligence?.direction ||
    position?.trend ||
    position?.trendDirection ||
    "";

  const trend = String(raw).toUpperCase();

  if (trend.includes("BUY")) return "Buying";
  if (trend.includes("SELL")) return "Selling";

  return "—";
}

function intelligenceState(position) {
  const state =
    position?.intelligence?.setupState ||
    position?.intelligence?.reversal?.status ||
    position?.intelligence?.state ||
    position?.setupState ||
    position?.intelligenceState ||
    "";

  const normalized = String(state).toUpperCase().replace(/_/g, " ");

  if (normalized === "REVERSAL CONFIRMED") {
    return {
      label: "🚨 REVERSAL CONFIRMED",
      className: "is-reversal-confirmed"
    };
  }

  if (normalized === "REVERSAL DEVELOPING") {
    return {
      label: "🔄 REVERSAL DEVELOPING",
      className: "is-reversal-developing"
    };
  }

  if (normalized === "WARNING") {
    return {
      label: "⚠ WARNING",
      className: "is-warning"
    };
  }

  if (normalized === "HOLD") {
    return {
      label: "🟢 HOLD",
      className: "is-hold"
    };
  }

  return {
    label: "—",
    className: ""
  };
}

function intelligencePercent(position) {
  const value =
    position?.intelligence?.reversal?.confidence ??
    position?.intelligence?.confidence ??
    position?.intelligenceConfidence ??
    position?.confidence;

  return Number.isFinite(Number(value))
    ? `${number(value, 0)}%`
    : "—";
}

export default function AfriForexActiveTrade({ account, loading }) {
  const [selectedPositionId, setSelectedPositionId] = useState(null);

  const positions = Array.isArray(account?.positions)
    ? account.positions
    : [];

  const totalPnl = positions.reduce(
    (total, position) => total + (Number(position.unrealizedPnl) || 0),
    0
  );

  if (loading) {
    return (
      <section className="afriforex-active-trade-card">
        <div className="afriforex-panel-heading">
          <div>
            <span className="afriforex-label">OPEN POSITIONS</span>
            <h2>Loading live positions…</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!positions.length) {
    return (
      <section className="afriforex-active-trade-card">
        <div className="afriforex-panel-heading">
          <div>
            <span className="afriforex-label">OPEN POSITIONS</span>
            <h2>No open positions</h2>
          </div>
        </div>

        <div className="afriforex-empty-state">
          <strong>No open positions</strong>
          <span>AfriAI has not opened a demo position.</span>
        </div>

        <div className="afriforex-position-scaffold">
          <div className="afriforex-scaffold-notification">
            <span className="afriforex-position-notification-bell">🔔</span>
            <strong>Get trade notifications</strong>
            <span>OFF</span>
            <span>⚙</span>
          </div>

          <div className="afriforex-open-position-top">
            <strong>— / —</strong>
            <strong>$0.00</strong>
          </div>

          <div className="afriforex-open-position-protection">
            <span>SL: —</span>
            <span>TP: —</span>
          </div>

          <div className="afriforex-open-position-intelligence">
            <span>Trend: —</span>
            <span className="afriforex-position-state">—</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="afriforex-active-trade-card">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">OPEN POSITIONS</span>
          <h2>
            TOTAL P/L:{" "}
            <span className={totalPnl < 0 ? "is-negative" : totalPnl > 0 ? "is-positive" : ""}>
              {money(totalPnl)}
            </span>
          </h2>
        </div>

        <span className="afriforex-label">
          {positions.length} {positions.length === 1 ? "POSITION" : "POSITIONS"}
        </span>
      </div>

      <div className="afriforex-open-positions">
        {positions.map((position) => {
          const pnl = Number(position.unrealizedPnl);
          const pnlClass =
            pnl < 0 ? "is-negative" : pnl > 0 ? "is-positive" : "";

          const direction = normalizeDirection(position.direction);
          const trend = normalizeTrend(position);
          const intelligence = intelligenceState(position);
          const confidence = intelligencePercent(position);
          const selected =
            selectedPositionId === position.positionId;

          return (
            <div
              className={`afriforex-open-position-row${selected ? " is-selected" : ""}`}
              key={position.positionId || `${position.symbol}-${position.entryPrice}`}
            >
              <button
                type="button"
                className="afriforex-open-position-summary"
                onClick={() =>
                  setSelectedPositionId(
                    selected ? null : position.positionId
                  )
                }
              >
                <div className="afriforex-open-position-top">
                  <strong>
                    {position.symbol || "—"} {direction}
                  </strong>

                  <strong className={pnlClass}>
                    {signedMoney(position.unrealizedPnl)}
                  </strong>

                  <span className="afriforex-position-notification">
                    🔔 ON
                  </span>
                </div>

                <div className="afriforex-open-position-protection">
                  <span>
                    TP: {price(position.takeProfit ?? position.takeProfitPrice)}
                  </span>
                  <span>
                    SL: {price(position.stopLoss ?? position.stopLossPrice)}
                  </span>
                </div>

                <div className="afriforex-open-position-intelligence">
                  <span>
                    Trend: <strong>{trend}</strong>
                  </span>

                  <span className={`afriforex-position-state ${intelligence.className}`}>
                    {intelligence.label}
                  </span>

                  <strong>{confidence}</strong>
                </div>
              </button>

              {selected && (
                <div className="afriforex-open-position-details">
                  <div className="afriforex-trade-fields">
                    {[
                      ["Position ID", position.positionId || "—"],
                      ["Symbol", position.symbol || "—"],
                      ["Direction", direction],
                      ["Entry", price(position.entryPrice)],
                      ["Current Price", price(position.currentPrice)],
                      ["Quantity", `${number(position.quantity, 4)} ${position.quantityUnit || "units"}`],
                      ["Lot Size", number(position.lotSize, 2)],
                      ["Leverage", Number.isFinite(Number(position.leverage)) ? `${number(position.leverage, 0)}×` : "—"],
                      ["Margin Required", money(position.marginRequired)],
                      ["Risk Amount", money(position.riskAmount)],
                      ["Risk %", Number.isFinite(Number(position.riskPercent)) ? `${number(position.riskPercent, 2)}%` : "—"],
                      ["Reward / Risk", number(position.rewardRisk, 2)],
                      ["Confidence", confidence],
                      ["Status", position.status || "—"],
                      ["Valuation", position.valuationProvider || "—"]
                    ].map(([label, value]) => (
                      <div className="afriforex-trade-field" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="afriforex-trade-field">
                    <span>Unrealized P/L · LIVE</span>
                    <strong className={pnlClass}>
                      {signedMoney(position.unrealizedPnl)}
                    </strong>
                  </div>

                  <div className="afriforex-empty-state">
                    Live valuation: {position.valuationStatus || "—"} · Provider:{" "}
                    {position.valuationProvider || "—"} · Equity:{" "}
                    {money(account?.equity)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
