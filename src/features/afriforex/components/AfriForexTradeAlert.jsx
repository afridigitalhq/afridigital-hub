import React, { useEffect, useMemo, useState } from "react";


function formatEconomicCountdown(time, now) {
  const target = new Date(time).getTime();
  if (!Number.isFinite(target)) return "TIME UNKNOWN";
  const diff = target - now;
  if (diff <= 0) return "RELEASED";
  const totalMinutes = Math.ceil(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function getTimeframeEvidence(horizonSignal, timeframes = []) {
  const evidence =
    horizonSignal?.horizonSignal?.evidence ||
    horizonSignal?.evidence ||
    {};

  return timeframes.map((timeframe) => {
    const item = evidence?.[timeframe];
    const raw =
      item?.status ||
      item?.direction ||
      item?.signal ||
      item?.state ||
      null;

    const value = String(raw || "").toUpperCase();

    if (
      value === "BUY" ||
      value === "STRONG_BUY" ||
      value === "SELL" ||
      value === "STRONG_SELL" ||
      value === "NEUTRAL"
    ) {
      const icon =
        value.includes("BUY") ? "🟢" :
        value.includes("SELL") ? "🔴" :
        "⚪";

      return `${timeframe}       ${icon} ${value}`;
    }

    if (
      value === "AVAILABLE" ||
      value === "OK" ||
      value === "CONFIRMED"
    ) {
      return `${timeframe}       ⚪ NEUTRAL`;
    }

    return `${timeframe}       ⚪ UNAVAILABLE`;
  });
}

function getSignalPresentation(tradeSignal, tradeAlert) {
  const signal = tradeAlert?.signal || tradeSignal?.signal || {};
  const state = String(signal.state || "NEUTRAL").toUpperCase();
  const confidence = Number(signal.confidence || 0);

  if (state === "INCOMING_REVERSAL") {
    return {
      state: "INCOMING_REVERSAL",
      title: "Incoming reversal detected",
      description: "AfriAI has detected a directional transition. Protect liquidity and wait for reversal confirmation."
    };
  }

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

  if (state === "WAIT") {
    const direction = String(signal.direction || "").toUpperCase();

    if (direction === "BUY" || direction === "STRONG_BUY") {
      return {
        state: "BUY",
        title: "Buy setup waiting for confirmation",
        description: "AfriAI has detected bullish evidence, but the Scalp setup is not yet tradeable."
      };
    }

    if (direction === "SELL" || direction === "STRONG_SELL") {
      return {
        state: "SELL",
        title: "Sell setup waiting for confirmation",
        description: "AfriAI has detected bearish evidence, but the Scalp setup is not yet tradeable."
      };
    }

    return {
      state: "NEUTRAL",
      title: "Waiting for confirmation",
      description: "AfriAI is monitoring live market evidence before declaring a trade."
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
  monitoredMarkets,
  monitoredTradeAlertsBySymbol = [],
  isMarketMonitored,
  onToggleMarketMonitoring,
  onAddAndMonitorScannedAsset,
  latestActivity = null,
  tradeAlertMarket = null,
  economicCalendar = null,
  onTradeAlertMarketChange,
  crossAssetEnabled = false,
  onToggleCrossAsset
}) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const nextHighImpactEvent = useMemo(() => {
    const events = Array.isArray(economicCalendar?.events) ? economicCalendar.events : [];
    return events
      .filter((event) => String(event?.importance || "").toUpperCase() === "HIGH")
      .filter((event) => {
        const target = new Date(event?.time).getTime();
        return Number.isFinite(target) && target > now;
      })
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())[0] || null;
  }, [economicCalendar, now]);

  const activityData = latestActivity?.data || {};
  const selectedSymbol = String(selectedMarket || '').trim().toUpperCase();
  const monitoredTradeAlert =
    selectedSymbol && monitoredMarkets.includes(selectedSymbol)
      ? monitoredTradeAlertsBySymbol?.[selectedSymbol] || null
      : null;
  const dataCandidates = [
    monitoredTradeAlert,
    activityData,
    tradeAlert,
    tradeSignal
  ].filter((item) => item && Object.keys(item).length);
  const matchingData = dataCandidates.find((item) => {
    const itemSymbol = String(item?.displaySymbol || item?.symbol || '').trim().toUpperCase();
    return selectedSymbol && itemSymbol === selectedSymbol;
  });
  const activeData = matchingData || (selectedSymbol ? {} : (dataCandidates[0] || {}));
  const scalpSignal = activeData?.horizonSignals?.SCALP || null;
  const scalpDirectionState = String(scalpSignal?.direction || "NEUTRAL").toUpperCase();
  const scalpIsReversal = scalpDirectionState === "INCOMING_REVERSAL";

  const primarySignal = scalpSignal && scalpDirectionState !== "NEUTRAL"
    ? {
        ...scalpSignal,
        state: scalpIsReversal
          ? "INCOMING_REVERSAL"
          : (scalpSignal.tradeable ? scalpSignal.direction : "WAIT"),
        signal: scalpIsReversal
          ? "INCOMING_REVERSAL"
          : (scalpSignal.tradeable ? scalpSignal.direction : "WAIT")
      }
    : (activeData?.signal || tradeAlert?.signal || tradeSignal?.signal || {});
  // The headline signal and signal bar are Scalp-only.
  // Intraday, Swing and Position remain available to AfriAI Insight and
  // the detailed analysis below, but never override the primary Scalp signal.
  const scalpPrimarySignal = scalpSignal || {};
  const activeSignal = scalpPrimarySignal;
  const presentation = getSignalPresentation({ signal: activeSignal }, { signal: activeSignal });
  const confidence = Number(activeSignal.confidence || 0);
  const scalpMomentumStrengthPercent = Math.max(
    0,
    Math.min(100, Number(activeSignal.scalpMomentumStrengthPercent ?? 0))
  );
  const score = Number(activeSignal.weightedScore ?? activeSignal.score ?? 0);
  const symbol =
    activeData?.displaySymbol ||
    activeData?.symbol ||
    latestActivity?.symbol ||
    selectedMarket ||
    tradeAlert?.symbol ||
    tradeSignal?.symbol ||
    "EUR/USD";

  const horizonSignals = activeData?.horizonSignals || {};
const crossAssetContext = activeData?.crossAssetContext || null;
  const candleEvidence = activeData?.candleEvidence || {};
  const liveProvider = activeData?.provider || tradeAlert?.provider || "UNAVAILABLE";
  const liveMode = activeData?.dataMode || tradeAlert?.dataMode || "UNKNOWN";
  const livePrice = activeData?.price ?? tradeAlert?.price ?? tradeSignal?.price ?? "UNAVAILABLE";

  const monitoringEnabled = typeof isMarketMonitored === "function" ? isMarketMonitored(symbol) : monitoredMarkets.includes(symbol);

  // Signal bar is driven exclusively by the current Scalp direction/strength.
  const scalpDirection = String(
    activeSignal?.direction || activeSignal?.signal || "NEUTRAL"
  ).toUpperCase();

  const scalpStrength = scalpMomentumStrengthPercent;

  const markerPosition =
    scalpDirection === "STRONG_BUY"
      ? Math.max(3, 15 - scalpStrength * 0.05)
      : scalpDirection === "BUY"
        ? 35 - scalpStrength * 0.15
        : scalpDirection === "STRONG_SELL"
          ? Math.min(97, 85 + scalpStrength * 0.05)
          : scalpDirection === "SELL"
            ? 65 + scalpStrength * 0.15
            : 50;

  return (
    <section id="afriai-trade-alert" className="afriforex-panel afriforex-alert-panel">
      <div className="afriforex-alert-content">
        <span className="afriforex-label">AFRIAI TRADE ALERT</span>

      <div id="afriforex-monitoring-assets" className={`afriforex-alert-notification-card ${monitoringEnabled ? "is-monitoring-active" : ""}`}>
          {monitoringEnabled && (
            <span
              className="afriforex-monitoring-live-dot"
              aria-label="AfriAI monitoring active"
              title="AfriAI monitoring active"
            />
          )}
          <div className="afriforex-alert-notification-copy">
            <span className="afriforex-label">AFRIAI MONITORING ASSETS</span>
            <strong className="afriforex-monitoring-title">
              <span className="afriforex-monitoring-safeguard" aria-hidden="true">🛡️</span>
              <span>Monitored assets</span>
            </strong>
            <span>
              {monitoredMarkets.length
                ? `${monitoredMarkets.length} asset${monitoredMarkets.length === 1 ? "" : "s"} currently monitored for AfriAI Trade Alerts.`
                : "No assets are currently monitored."}
            </span>
          </div>

          <div className="afriforex-alert-monitoring-controls">
            <select
              value={monitoredMarkets.includes(selectedMarket) ? selectedMarket : ""}
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
              disabled={!onToggleMarketMonitoring}
            >
              <span className="afriforex-trade-alert-bell">
                {monitoringEnabled ? "🔔" : "🔕"}
              </span>
              {monitoringEnabled ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <div className="afriforex-alert-asset-name">
          {symbol}
        </div>

        <div className="afriforex-alert-signal">
          <span
            className={
              scalpDirection === "BUY" || scalpDirection === "STRONG_BUY"
                ? "afriforex-buy-badge"
                : scalpDirection === "SELL" || scalpDirection === "STRONG_SELL"
                  ? "afriforex-sell-badge"
                  : "afriforex-neutral-badge"
            }
          >
            {scalpDirection}
          </span>
        </div>

        <div className="afriforex-signal-scale" aria-label="AfriAI Trade Alert strength">
          <div className="afriforex-signal-track">
            <span
              className="afriforex-signal-marker"
              style={{ left: `${markerPosition}%` }}
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

        <div className="afriforex-intelligence-update">
          <div className="afriforex-label">🔔 AfriAI INTELLIGENCE UPDATE</div>

          <div className="afriforex-intelligence-symbol">
            {symbol}
          </div>

          {["SCALP", "INTRADAY", "SWING"].map((horizon) => {
            const horizonSignal = horizonSignals?.[horizon];
            const timeframes =
              horizon === "SCALP"
                ? ["1min", "5min", "15M", "1H"]
                : horizon === "INTRADAY"
                  ? ["5min", "15M", "1H", "4H"]
                  : ["1H", "4H", "1D", "1W"];

            const evidence =
              horizonSignal?.horizonSignal?.evidence ||
              horizonSignal?.evidence ||
              {};

            return (
              <div
                key={horizon}
                className="afriforex-intelligence-section"
              >
                <strong className="afriforex-intelligence-section-title">{horizon}</strong>

                {timeframes.map((timeframe) => {
                  const item = evidence?.[timeframe] || {};
                  const direction = String(
                    item?.direction ||
                    item?.signal ||
                    item?.state ||
                    item?.status ||
                    "NEUTRAL"
                  ).toUpperCase();

                  const icon =
                    direction.includes("BUY") ? "🟢" :
                    direction.includes("SELL") ? "🔴" :
                    "⚪";

                  const strength =
                    horizon === "SCALP"
                      ? Number(
                          item?.strengthPercent ??
                          item?.momentumStrengthPercent ??
                          item?.scalpMomentumStrengthPercent ??
                          item?.confidence ??
                          0
                        )
                      : 0;

                  return (
                    <div
                      key={`${horizon}-${timeframe}`}
                      className="afriforex-intelligence-row"
                    >
                      <span className="afriforex-intelligence-field">{timeframe}</span>
                      <span className="afriforex-intelligence-answer">
                        {icon} {direction}
                        {strength > 0 ? ` ${strength}%` : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div className="afriforex-intelligence-section">
            <strong className="afriforex-intelligence-section-title">EC</strong>

            {nextHighImpactEvent ? (
              <>
                <div className="afriforex-intelligence-row">
                  <span className="afriforex-intelligence-field">Event</span>
                  <span className="afriforex-intelligence-answer">
                    🟡 {nextHighImpactEvent.currency || "USD"} high-impact event → imminent
                  </span>
                </div>

                <div className="afriforex-intelligence-row">
                  <span className="afriforex-intelligence-field">Countdown</span>
                  <span className="afriforex-intelligence-answer">
                    {formatEconomicCountdown(nextHighImpactEvent.time, now)}
                  </span>
                </div>
              </>
            ) : (
              <div className="afriforex-intelligence-row">
                <span className="afriforex-intelligence-field">Event</span>
                <span className="afriforex-intelligence-answer">⚪ No imminent high-impact event</span>
              </div>
            )}
          </div>

          <div className="afriforex-intelligence-section afriforex-intelligence-afriai">
            <strong className="afriforex-intelligence-section-title">AFRIAI</strong>

            <div className="afriforex-intelligence-row">
              <span className="afriforex-intelligence-field">Trade decision</span>
              <span className="afriforex-intelligence-answer">
                {String(
                  activeSignal?.tradeDecision ||
                  activeData?.tradeDecision ||
                  "WAIT"
                ).toUpperCase() === "ENTER"
                  ? "🟢 ENTER"
                  : "⚪ WAIT"}
              </span>
            </div>

            <div className="afriforex-intelligence-row">
              <span className="afriforex-intelligence-field afriforex-intelligence-reason-label">Reason</span>
              <span className="afriforex-intelligence-answer">
                {activeSignal?.reason ||
                  activeSignal?.tradeReason ||
                  activeData?.reason ||
                  activeData?.tradeReason ||
                  (activeSignal?.timingConflict
                    ? "1min timing conflict"
                    : "Awaiting confirmation")}
              </span>
            </div>
          </div>
        </div>

        {!monitoringEnabled && (
          <div className="afriforex-monitoring-cta">
            <div className="afriforex-monitoring-cta-text">
              🔔 Want AfriAI to keep monitoring {symbol}?
            </div>

            <button
              type="button"
              className="afriforex-monitoring-cta-button"
              onClick={() => {
                onAddAndMonitorScannedAsset?.({
                  symbol,
                  displaySymbol: symbol
                });

                if (!notificationsEnabled) {
                  void onToggleNotifications?.();
                }

                window.setTimeout(() => {
                  document
                    .getElementById("afriforex-monitoring-assets")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                }, 0);
              }}
            >
              + Add & Turn On Notifications
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
