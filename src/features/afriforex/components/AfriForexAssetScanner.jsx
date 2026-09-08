import React, { useEffect, useState } from "react";
import { postAfriForexScan } from "../api/AfriForexClient";
import AfriForexMarketSelector from "./AfriForexMarketSelector";

const DEMO_CUSTOMER_ID = "demo-test";

function normalizeDirection(signal = {}, mtf = {}) {
  const rawDirection = String(signal.direction || "").toUpperCase();

  if (rawDirection === "STRONG_BUY") return "STRONG BUY";
  if (rawDirection === "BUY") return "BUY";
  if (rawDirection === "STRONG_SELL") return "STRONG SELL";
  if (rawDirection === "SELL") return "SELL";

  const raw = String(signal.signal || "").toUpperCase();

  if (raw === "STRONG_BUY") return "STRONG BUY";
  if (raw === "BUY") return "BUY";
  if (raw === "STRONG_SELL") return "STRONG SELL";
  if (raw === "SELL") return "SELL";

  const primary = Number(mtf.primaryScore ?? signal.primaryScore ?? 0);
  const higher = Number(mtf.higherTimeframeScore ?? signal.higherTimeframeScore ?? 0);
  const confidence = Number(signal.confidence ?? mtf.confidence ?? 0);

  if (primary > 0) {
    return higher > 0 && confidence >= 70 ? "STRONG BUY" : "BUY";
  }

  if (primary < 0) {
    return higher < 0 && confidence >= 70 ? "STRONG SELL" : "SELL";
  }

  return "NEUTRAL";
}

function setupState(signal = {}, mtf = {}) {
  const primary = Number(mtf.primaryScore ?? signal.primaryScore ?? 0);
  const confirmation = Number(mtf.confirmationScore ?? signal.confirmationScore ?? 0);
  const entry = Number(mtf.entryScore ?? signal.entryScore ?? 0);

  if (primary !== 0 && confirmation !== 0 && Math.sign(primary) === Math.sign(confirmation)) {
    if (entry !== 0 && Math.sign(entry) === Math.sign(primary)) {
      return "ALIGNMENT CONFIRMED";
    }
    return "DEVELOPING";
  }

  if (primary !== 0 && confirmation !== 0 && Math.sign(primary) !== Math.sign(confirmation)) {
    return "DEVELOPING / CONFLICT";
  }

  return "DEVELOPING";
}

function tradeDecision(signal = {}) {
  if (signal.tradeable) return "ENTER";
  return "WAIT";
}

function waitingFor(direction, mtf = {}) {
  const primary = Number(mtf.primaryScore ?? 0);
  const confirmation = Number(mtf.confirmationScore ?? 0);
  const entry = Number(mtf.entryScore ?? 0);

  if (direction.includes("BUY")) {
    const needs = [];
    if (primary <= 0) needs.push("bullish 4H primary confirmation");
    if (confirmation <= 0) needs.push("bullish 1H confirmation");
    if (entry <= 0) needs.push("suitable 15M entry evidence");
    return needs.join(" + ") || "entry trigger";
  }

  if (direction.includes("SELL")) {
    const needs = [];
    if (primary >= 0) needs.push("bearish 4H primary confirmation");
    if (confirmation >= 0) needs.push("bearish 1H confirmation");
    if (entry >= 0) needs.push("suitable 15M entry evidence");
    return needs.join(" + ") || "entry trigger";
  }

  return "clear directional alignment";
}

export default function AfriForexAssetScanner({ selectedMarket, onMarketChange }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setResult(null);
    setError("");
  }, [selectedMarket]);

  async function handleScan() {
    if (!selectedMarket) return;

    setScanning(true);
    setError("");

    try {
      const data = await postAfriForexScan(DEMO_CUSTOMER_ID, [selectedMarket]);
      const market = data?.results?.[0] || data?.opportunities?.[0] || null;

      if (!market) {
        throw new Error("AFRIAI_SCAN_EMPTY");
      }

      setResult(market);
    } catch (scanError) {
      console.error("AfriForex asset scan error:", scanError);
      setResult(null);
      setError(scanError?.message || "AFRIAI_SCAN_UNAVAILABLE");
    } finally {
      setScanning(false);
    }
  }

  const signal = result?.signal || {};
  const mtf = result?.mtf || result?.multiTimeframeAnalysis || {};
  const direction = normalizeDirection(signal, mtf);
  const setup = setupState(signal, mtf);
  const decision = tradeDecision(signal);
  const confidence = Number(signal.confidence ?? mtf.confidence ?? 0);
  const tradeable = Boolean(signal.tradeable);
  const reason =
    signal.reason ||
    mtf.reason ||
    (tradeable ? "MULTI_TIMEFRAME_ALIGNMENT" : "PRIMARY_CONFIRMATION_NOT_ALIGNED");

  return (
    <section className="afriforex-panel afriforex-asset-scanner">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">AFRIAI ASSET SCANNER</span>
          <h2>{selectedMarket || "Select an asset"}</h2>
        </div>

        <AfriForexMarketSelector
          selectedMarket={selectedMarket}
          onMarketChange={onMarketChange}
        />

        <button
          type="button"
          className="afriforex-scan-button"
          onClick={handleScan}
          disabled={!selectedMarket || scanning}
        >
          {scanning ? "SCANNING..." : "SCAN ASSET"}
        </button>
      </div>

      {!result && !error && (
        <div className="afriforex-scanner-empty">
          Select an asset and run AfriAI's live intelligence scan.
        </div>
      )}

      {error && (
        <div className="afriforex-scanner-error">
          {error}
        </div>
      )}

      {result && (
        <div className="afriforex-scanner-result">
          <div className="afriforex-scanner-direction">
            <span className="afriforex-label">AFRIAI DIRECTION</span>
            <strong>{direction}</strong>
          </div>

          <div className="afriforex-scanner-grid">
            <div>
              <span className="afriforex-label">SETUP</span>
              <strong>{setup}</strong>
            </div>

            <div>
              <span className="afriforex-label">TRADE DECISION</span>
              <strong>{decision}</strong>
            </div>

            <div>
              <span className="afriforex-label">CONFIDENCE</span>
              <strong>{confidence}%</strong>
            </div>

            <div>
              <span className="afriforex-label">TRADEABLE</span>
              <strong>{tradeable ? "YES" : "NO"}</strong>
            </div>
          </div>

          <div className="afriforex-scanner-detail">
            <span className="afriforex-label">REASON</span>
            <p>{reason}</p>
          </div>

          <div className="afriforex-scanner-detail">
            <span className="afriforex-label">WAITING FOR</span>
            <p>{tradeable ? "Entry trigger satisfied." : waitingFor(direction, mtf)}</p>
          </div>

          <div className="afriforex-scanner-mtf">
            <span className="afriforex-label">MULTI-TIMEFRAME EVIDENCE</span>
            <div>
              <span>1D <strong>{Number(mtf.higherTimeframeScore ?? signal.higherTimeframeScore ?? 0) > 0 ? "BULLISH" : Number(mtf.higherTimeframeScore ?? signal.higherTimeframeScore ?? 0) < 0 ? "BEARISH" : "NEUTRAL"}</strong></span>
              <span>4H <strong>{Number(mtf.primaryScore ?? signal.primaryScore ?? 0) > 0 ? "BULLISH" : Number(mtf.primaryScore ?? signal.primaryScore ?? 0) < 0 ? "BEARISH" : "NEUTRAL"}</strong></span>
              <span>1H <strong>{Number(mtf.confirmationScore ?? signal.confirmationScore ?? 0) > 0 ? "BULLISH" : Number(mtf.confirmationScore ?? signal.confirmationScore ?? 0) < 0 ? "BEARISH" : "NEUTRAL"}</strong></span>
              <span>15M <strong>{Number(mtf.entryScore ?? signal.entryScore ?? 0) > 0 ? "BULLISH" : Number(mtf.entryScore ?? signal.entryScore ?? 0) < 0 ? "BEARISH" : "NEUTRAL"}</strong></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
