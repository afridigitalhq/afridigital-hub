import React from "react";
import useAfriForexMarket from "../hooks/useAfriForexMarket";

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

export default function AfriForexDemoBalance() {
  const { account, loading } = useAfriForexMarket();

  const positions = Array.isArray(account?.positions)
    ? account.positions
    : [];

  const openLotSize = positions.reduce(
    (total, position) => total + (Number(position.lotSize) || 0),
    0
  );

  const openQuantity = positions.reduce(
    (total, position) => total + (Number(position.quantity) || 0),
    0
  );

  const unrealizedPnl = positions.reduce(
    (total, position) => total + (Number(position.unrealizedPnl) || 0),
    0
  );

  const leverage =
    positions.length > 0
      ? Number(positions[0]?.leverage)
      : null;

  const quantityUnit =
    positions.length === 1
      ? positions[0]?.quantityUnit || "units"
      : "units";

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

        <div className="afriforex-balance-row">
          <span>Leverage</span>
          <strong>
            {loading || !Number.isFinite(leverage)
              ? "—"
              : `${number(leverage, 0)}×`}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Open Lot Size</span>
          <strong>
            {loading ? "—" : number(openLotSize, 2)}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Open Quantity</span>
          <strong>
            {loading
              ? "—"
              : `${number(openQuantity, 2)} ${quantityUnit}`}
          </strong>
        </div>

        <div className="afriforex-balance-row afriforex-live-row">
          <span>Unrealized P/L</span>
          <strong className={unrealizedPnl < 0 ? "is-negative" : unrealizedPnl > 0 ? "is-positive" : ""}>
            {loading ? "—" : money(unrealizedPnl)}
            {!loading && <small> · LIVE</small>}
          </strong>
        </div>

        <div className="afriforex-balance-row">
          <span>Open Positions</span>
          <strong>{loading ? "—" : positions.length}</strong>
        </div>
      </div>

      <button type="button" className="afriforex-topup-button">
        Top Up Demo
      </button>
    </section>
  );
}
