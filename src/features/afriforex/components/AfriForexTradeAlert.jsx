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
  selectedMarket = null,
  tradeAlert,
  tradeSignal,
  afriaiInsight = null,
  connected = false,
  lastEventAt = null,
  notificationsEnabled = false,
  notificationPermission = "default",
  onToggleNotifications,
  monitoredMarkets = [],
  isMarketMonitored,
  onToggleMarketMonitoring,
  tradeAlertMarket = null,
  onTradeAlertMarketChange
}) {
  const presentation = getSignalPresentation(tradeSignal, tradeAlert);
  const activeSignal = tradeAlert?.signal || tradeSignal?.signal || {};
  const confidence = Number(activeSignal.confidence || 0);
  const score = Number(activeSignal.score || 0);
  const symbol =
    selectedMarket ||
    tradeAlert?.symbol ||
    tradeSignal?.symbol ||
    "EUR/USD";

  const monitoringEnabled = typeof isMarketMonitored === "function" ? isMarketMonitored(symbol) : monitoredMarkets.includes(symbol);

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

      <div className="afriforex-alert-notification-card">
          <div className="afriforex-alert-notification-copy">
            <span className="afriforex-label">AFRIAI MONITORING ASSETS</span>
            <strong>
              <span className="afriforex-trade-alert-bell">🔔</span>
              Monitored assets
            </strong>
            <span>
              {monitoredMarkets.length
                ? `${monitoredMarkets.length} asset${monitoredMarkets.length === 1 ? "" : "s"} currently monitored for AfriAI Trade Alerts.`
                : "No assets are currently monitored."}
            </span>
          </div>

          <div className="afriforex-alert-monitoring-controls">
            <select
              value={monitoredMarkets.includes(tradeAlertMarket) ? tradeAlertMarket : ""}
              onChange={(event) => onTradeAlertMarketChange?.(event.target.value || null)}
              aria-label="Select AfriAI monitoring asset"
              disabled={!monitoredMarkets.length}
            >
              <option value="">Select monitored asset</option>
              {monitoredMarkets.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>

            <button
              type="button"
              className={`afriforex-alert-notification-button ${monitoringEnabled ? "is-on" : "is-off"}`}
              aria-label={`${monitoringEnabled ? "Disable" : "Enable"} AfriAI monitoring for ${symbol}`}
              onClick={() => onToggleMarketMonitoring?.(symbol)}
              disabled={!onToggleMarketMonitoring || notificationPermission === "denied"}
            >
              <span className="afriforex-trade-alert-bell">
                {monitoringEnabled ? "🔔" : "🔕"}
              </span>
              {monitoringEnabled ? "ON" : "OFF"}
            </button>
          </div>
        </div>

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

        <div className="afriforex-alert-insight">
          <span className="afriforex-label">AFRIAI INSIGHT</span>
          <strong>
            {afriaiInsight?.text ||
              "AfriAI is monitoring live market evidence and will update this insight when a meaningful state change occurs."}
          </strong>
          {afriaiInsight?.detail && <span>{afriaiInsight.detail}</span>}
          {afriaiInsight?.updatedAt && (
            <small>
              Updated {new Date(afriaiInsight.updatedAt).toLocaleTimeString()}
            </small>
          )}
        </div>

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

        <div className="afriforex-alert-analysis">
        <div className="afriforex-alert-analysis-inner">
          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">LIVE DATA</span>
            <div>Provider: <strong>{tradeAlert?.provider || "UNAVAILABLE"}</strong></div>
            <div>Mode: <strong>{tradeAlert?.dataMode || "LIVE"}</strong></div>
            <div>Price: <strong>{tradeAlert?.price ?? tradeSignal?.price ?? "UNAVAILABLE"}</strong></div>
            <div>Updated: <strong>{lastEventAt || "UNAVAILABLE"}</strong></div>
          </div>

          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">SCALP · 1m / 5m / 15m / 1H</span>
            <div>Timeframe Evidence: <strong>LIVE EVIDENCE PENDING</strong></div>
            <div>Market Structure: <strong>UNAVAILABLE</strong></div>
            <div>Momentum: <strong>UNAVAILABLE</strong></div>
            <div>Indicators: <strong>UNAVAILABLE</strong></div>
            <div>EC — Evidence &amp; Confirmation: <strong>UNAVAILABLE</strong></div>
            <div>Decision: <strong>NEUTRAL · Tradeable NO</strong></div>
          </div>

          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">INTRADAY · 5m / 15m / 1H / 4H</span>
            <div>Analysis: <strong>LIVE EVIDENCE PENDING</strong></div>
          </div>

          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">SWING · 1H / 4H / 1D / 1W</span>
            <div>Analysis: <strong>LIVE EVIDENCE PENDING</strong></div>
          </div>

          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">POSITION · 4H / 1D / 1W / 1M</span>
            <div>Analysis: <strong>LIVE EVIDENCE PENDING</strong></div>
          </div>

          <div className="afriforex-alert-analysis-section">
            <span className="afriforex-label">CORRELATION / CROSS-ASSET CONTEXT</span>
            <div>Correlation Evidence: <strong>UNAVAILABLE</strong></div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
