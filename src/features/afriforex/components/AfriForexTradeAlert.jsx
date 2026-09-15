import React from "react";


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


function HorizonPresentation({
  title,
  timeframes,
  horizonSignal,
  primary = false
}) {
  const signal = horizonSignal || {};
  const direction = String(signal.direction || "NEUTRAL").toUpperCase();
  const confidence = Number(signal.confidence ?? 0);
  const setup = signal.setupState || "INSUFFICIENT_DATA";
  const tradeable = Boolean(signal.tradeable);
  const decision = tradeable
    ? `${direction} NOW · Tradeable YES`
    : direction !== "NEUTRAL"
      ? `${direction} WAIT · Tradeable NO`
      : `${signal.tradeDecision || "WAIT"} · Tradeable NO`;

  const evidence = getTimeframeEvidence(signal, timeframes);

  return (
    <div className={`afriforex-alert-analysis-section afriforex-horizon-section ${primary ? "is-primary-horizon" : ""}`}>
      <div className="afriforex-horizon-heading">
        <span className="afriforex-horizon-title">{title}</span>
        <span className="afriforex-horizon-timeframes">{timeframes.join(" / ")}</span>
      </div>

      <div className="afriforex-horizon-primary">
        <span className={`afriforex-horizon-direction afriforex-${direction.toLowerCase()}-text`}>
          {direction.includes("BUY") ? "🟢" : direction.includes("SELL") ? "🔴" : "⚪"} {direction}
        </span>

        <div className="afriforex-horizon-metrics">
          <div>
            <span>CONFIDENCE</span>
            <strong>{confidence}%</strong>
          </div>
          <div>
            <span>SETUP</span>
            <strong>{setup}</strong>
          </div>
        </div>
      </div>

      <div className="afriforex-timeframe-evidence">
        <span className="afriforex-analysis-subtitle">TIMEFRAME EVIDENCE</span>
        {evidence.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div className="afriforex-horizon-subsection">
        <span>MARKET STRUCTURE</span>
        <div><span className="afriforex-field-label">Trend:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Support:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Resistance:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Liquidity:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Volatility:</span> <strong>UNAVAILABLE</strong></div>
      </div>

      <div className="afriforex-horizon-subsection">
        <span>MOMENTUM</span>
        <div><span className="afriforex-field-label">RSI:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">MACD:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Stochastic:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Momentum:</span> <strong>UNAVAILABLE</strong></div>
      </div>

      <div className="afriforex-horizon-subsection">
        <span>INDICATORS</span>
        <div><span className="afriforex-field-label">EMA:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">VWAP:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Bollinger:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">ATR:</span> <strong>UNAVAILABLE</strong></div>
      </div>

      <div className="afriforex-horizon-subsection">
        <span>EC — EVIDENCE &amp; CONFIRMATION</span>
        <div><span className="afriforex-field-label">Structure:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Momentum:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Volume:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Liquidity:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">MTF agreement:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Conflicts:</span> <strong>{signal.setupState === "CONFLICT" ? "YES" : "UNAVAILABLE"}</strong></div>
      </div>

      <div className="afriforex-horizon-decision">
        <span>AFRIAI DECISION</span>
        <strong>{decision}</strong>
        <div><span className="afriforex-field-label">Evidence strength:</span> <strong>{signal.weightedScore ?? "UNAVAILABLE"}</strong></div>
        <div><span className="afriforex-field-label">Setup quality:</span> <strong>{setup}</strong></div>
      </div>

      <div className="afriforex-horizon-subsection">
        <span>RISK</span>
        <div><span className="afriforex-field-label">Entry:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Stop:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">TP1:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">TP2:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Risk:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Position size:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Slippage estimate:</span> <strong>UNAVAILABLE</strong></div>
        <div><span className="afriforex-field-label">Max leverage:</span> <strong>UNAVAILABLE</strong></div>
      </div>

      <div className="afriforex-horizon-reason">
        <span>REASON</span>
        <strong>{signal.reason || "HORIZON_INSUFFICIENT_DATA"}</strong>
      </div>
    </div>
  );
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
  latestActivity = null,
  tradeAlertMarket = null,
  onTradeAlertMarketChange,
  crossAssetEnabled = false,
  onToggleCrossAsset
}) {
  const activityData = latestActivity?.data || {};
  const selectedSymbol = String(selectedMarket || '').trim().toUpperCase();
  const dataCandidates = [activityData, tradeAlert, tradeSignal].filter((item) => item && Object.keys(item).length);
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

      <div className={`afriforex-alert-notification-card ${monitoringEnabled ? "is-monitoring-active" : ""}`}>
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
              disabled={!onToggleMarketMonitoring || notificationPermission === "denied"}
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

        {scalpMomentumStrengthPercent > 0 && (
          <p>
            <span className="afriforex-field-label">SCALP STRENGTH:</span> <strong>{scalpMomentumStrengthPercent}%</strong>
          </p>
        )}
        {confidence > 0 && (
          <p>
            <span className="afriforex-field-label">Confidence:</span> <strong>{confidence}%</strong>
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
            <div><span className="afriforex-field-label">Provider:</span> <strong>{liveProvider}</strong></div>
            <div><span className="afriforex-field-label">Mode:</span> <strong>{liveMode}</strong></div>
            <div><span className="afriforex-field-label">Price:</span> <strong>{livePrice}</strong></div>
            <div><span className="afriforex-field-label">Updated:</span> <strong>{latestActivity?.updatedAt || lastEventAt || "UNAVAILABLE"}</strong></div>
          </div>

          <HorizonPresentation
            title="SCALP"
            timeframes={["1min", "5min", "15M", "1H"]}
            horizonSignal={horizonSignals?.SCALP}
            primary
          />

          <HorizonPresentation
            title="INTRADAY"
            timeframes={["5min", "15M", "1H", "4H"]}
            horizonSignal={horizonSignals?.INTRADAY}
          />

          <HorizonPresentation
            title="SWING"
            timeframes={["1H", "4H", "1D", "1W"]}
            horizonSignal={horizonSignals?.SWING}
          />

          <HorizonPresentation
            title="POSITION"
            timeframes={["4H", "1D", "1W", "1MO"]}
            horizonSignal={horizonSignals?.POSITION}
          />

          <div className="afriforex-alert-analysis-section">
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}>
              <span className="afriforex-label">CORRELATION / CROSS-ASSET CONTEXT</span>
              <button type="button" className="afriforex-scan-button" onClick={() => onToggleCrossAsset?.(!crossAssetEnabled)}>
                CROSS-ASSET: {crossAssetEnabled ? "ON" : "OFF"}
              </button>
            </div>
            <div>Correlation Evidence: <strong>{crossAssetEnabled ? (crossAssetContext?.evidence || "AWAITING SCAN") : "OFF"}</strong></div>
            {crossAssetEnabled && crossAssetContext ? (
              <>
                <div className="afriforex-horizon-subsection">
                  <span>SCALP BASIS</span>
                  <div>Direction: <strong>{crossAssetContext.scalpDirection || "NEUTRAL"}</strong></div>
                  <div>Confidence: <strong>{crossAssetContext.scalpConfidence ?? 0}%</strong></div>
                </div>
                <div className="afriforex-horizon-subsection">
                  <span>SUPPORTING — {crossAssetContext.counts?.supporting ?? 0}</span>
                  {(crossAssetContext.assets || []).filter(item => item.classification === "SUPPORTING").map(item => (
                    <div key={`supporting-${item.symbol}`}>🟢 {item.displaySymbol || item.symbol} <strong>{Number.isFinite(Number(item.correlation)) ? Number(item.correlation).toFixed(2) : "UNAVAILABLE"}</strong></div>
                  ))}
                </div>
                <div className="afriforex-horizon-subsection">
                  <span>AGAINST — {crossAssetContext.counts?.against ?? 0}</span>
                  {(crossAssetContext.assets || []).filter(item => item.classification === "AGAINST").map(item => (
                    <div key={`against-${item.symbol}`}>🔴 {item.displaySymbol || item.symbol} <strong>{Number.isFinite(Number(item.correlation)) ? Number(item.correlation).toFixed(2) : "UNAVAILABLE"}</strong></div>
                  ))}
                </div>
                <div className="afriforex-horizon-subsection">
                  <span>NEUTRAL — {crossAssetContext.counts?.neutral ?? 0}</span>
                  {(crossAssetContext.assets || []).filter(item => item.classification === "NEUTRAL").map(item => (
                    <div key={`neutral-${item.symbol}`}>⚪ {item.displaySymbol || item.symbol} <strong>{Number.isFinite(Number(item.correlation)) ? Number(item.correlation).toFixed(2) : "UNAVAILABLE"}</strong></div>
                  ))}
                </div>
                <div className="afriforex-horizon-subsection">
                  <span>UNAVAILABLE — {crossAssetContext.counts?.unavailable ?? 0}</span>
                </div>
                <div className="afriforex-horizon-decision">
                  <span>CROSS-ASSET BIAS</span>
                  <strong>{crossAssetContext.bias || "UNAVAILABLE"}</strong>
                  <div>SUPPORT: <strong>{crossAssetContext.counts?.supporting ?? 0}</strong></div>
                  <div>AGAINST: <strong>{crossAssetContext.counts?.against ?? 0}</strong></div>
                  <div>NEUTRAL: <strong>{crossAssetContext.counts?.neutral ?? 0}</strong></div>
                  <div>CONFIDENCE: <strong>{crossAssetContext.confidence ?? 0}%</strong></div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
