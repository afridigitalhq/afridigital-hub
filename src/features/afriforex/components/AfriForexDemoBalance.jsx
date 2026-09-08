import React from "react";
import AfriForexActiveTrade from "./AfriForexActiveTrade";

function money(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "—";

  return `${numeric < 0 ? "-" : ""}$${Math.abs(numeric).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export default function AfriForexDemoBalance({ account, loading }) {
  const positions = Array.isArray(account?.positions)
    ? account.positions
    : [];

  const unrealizedPnl = positions.reduce(
    (total, position) => total + (Number(position.unrealizedPnl) || 0),
    0
  );

  return (
    <section className="afriforex-panel afriforex-balance-card">
      <span className="afriforex-label">DEMO ACCOUNT</span>

      <div className="afriforex-account-metrics">
        <div className="afriforex-balance-row">
          <span>Balance</span>
          <strong>{loading ? "—" : money(account?.balance)}</strong>
        </div>

        <div className="afriforex-balance-row afriforex-live-row">
          <span>Equity</span>
          <strong>
            {loading ? "—" : money(account?.equity)}
            {!loading && <small> · LIVE</small>}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Available Margin</span>
          <strong>
            {loading ? "—" : money(account?.availableMargin)}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Used Margin</span>
          <strong>
            {loading ? "—" : money(account?.usedMargin)}
          </strong>
        </div>

        <div className="afriforex-balance-row afriforex-live-row">
          <span>Unrealized P/L</span>
          <strong
            className={
              unrealizedPnl < 0
                ? "is-negative"
                : unrealizedPnl > 0
                  ? "is-positive"
                  : ""
            }
          >
            {loading ? "—" : money(unrealizedPnl)}
            {!loading && <small> · LIVE</small>}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Open Positions</span>
          <strong>{loading ? "—" : positions.length}</strong>
        </div>
      </div>

      <div className="afriforex-demo-account-actions">
        <button type="button" className="afriforex-topup-button">
          Top Up Demo
        </button>
      </div>

      <div className="afriforex-account-layer-divider" />

      <div className="afriforex-open-positions-layer">
        <AfriForexActiveTrade account={account} loading={loading} />
      </div>
    </section>
  );
}
