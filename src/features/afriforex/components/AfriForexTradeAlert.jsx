import React from "react";

function getSignalPresentation(tradeSignal, tradeAlert) {
  const signal = tradeAlert?.signal || tradeSignal?.signal || {};
  const state = String(signal.state || "NEUTRAL").toUpperCase();
  const confidence = Number(signal.confidence || 0);

  if (state === "BUY" || state === "STRONG_BUY") {
    return {
      state: "BUY",
      title: "Buy opportunity detected",
      description: "AfriAI has detected bullish multi-timeframe alignment."
    };
  }

  if (state === "SELL" || state === "STRONG_SELL") {
    return {
      state: "SELL",
      title: "Sell opportunity detected",
      description: "AfriAI has detected bearish multi-timeframe alignment."
    };
  }

  return {
    state: "NEUTRAL",
    title: "Neutral (no active trade)",
    description: "AfriAI is waiting for live market evidence."
  };
}

export default function AfriForexTradeAlert({
  tradeAlert,
  tradeSignal,
  connected = false,
  lastEventAt = null,
  notificationsEnabled = false,
  notificationPermission = "default",
  onToggleNotifications
}) {
  const presentation = getSignalPresentation(tradeSignal, tradeAlert);
  const activeSignal = tradeAlert?.signal || tradeSignal?.signal || {};
  const confidence = Number(activeSignal.confidence || 0);
  const score = Number(activeSignal.score || 0);
  const symbol =
    tradeAlert?.symbol ||
    tradeSignal?.symbol ||
    "EUR/USD";

  const markerPosition =
    presentation.state === "BUY"
      ? 50 + Math.min(45, Math.max(0, score) * 9)
      : presentation.state === "SELL"
        ? 50 - Math.min(45, Math.abs(Math.min(0, score)) * 9)
        : 50;

  return (
    <section id="afriai-trade-alert" className="afriforex-panel afriforex-alert-panel">
      <div className="afriforex-alert-content">
        <span className="afriforex-label">AFRIAI TRADE ALERT</span>

        <div className="afriforex-alert-signal">
          <span className={`afriforex-${presentation.state.toLowerCase()}-badge`}>
            {presentation.state}
          </span>
        </div>

        <h2>{presentation.title}</h2>

        <p>
          {presentation.description}
          {" "}
          {symbol}
          {" · "}
          {connected ? "LIVE" : "OFFLINE"}
        </p>

        {confidence > 0 && (
          <p>
            Confidence: <strong>{confidence}%</strong>
          </p>
        )}

        <div
          className="afriforex-signal-scale"
          aria-label="AfriAI trading signal scale"
        >
          <div className="afriforex-signal-track">
            <span
              className="afriforex-signal-marker"
              style={{
                left: `${markerPosition}%`
              }}
            />
          </div>

          <div className="afriforex-signal-labels">
            <span>STRONG BUY</span>
            <span>BUY</span>
            <span>NEUTRAL</span>
            <span>SELL</span>
            <span>STRONG SELL</span>
          </div>
        </div>

        {lastEventAt && (
          <small>
            Updated {new Date(lastEventAt).toLocaleTimeString()}
          </small>
        )}

        <div className="afriforex-alert-notification-card">
          <div className="afriforex-alert-notification-copy">
            <span className="afriforex-label">BROWSER ALERTS</span>
            <strong>AfriAI Trade Alert notifications</strong>
            <span>{notificationsEnabled ? "Browser alerts are enabled for live AfriForex events." : "Enable browser alerts to receive live AfriForex events."}</span>
          </div>
          <button type="button" className="afriforex-alert-notification-button" onClick={onToggleNotifications} disabled={!onToggleNotifications || notificationPermission === "denied"}>{notificationsEnabled ? "🔔 ON" : "🔕 ENABLE"}</button>
        </div>
      </div>
    </section>
  );
}
