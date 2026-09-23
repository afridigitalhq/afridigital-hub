import React, { useState } from "react";
import { postAfriForexScan, AFRIFOREX_DEMO_CUSTOMER_ID } from "../api/AfriForexClient";
import AfriForexMarketSelector from "./AfriForexMarketSelector";


export default function AfriForexAssetScanner({
  selectedMarket,
  onMarketChange,
  onScanResult,
  crossAssetEnabled = false,
}) {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");

  async function handleScan() {
    if (!selectedMarket) return;

    setScanning(true);
    setError("");

    try {
      const data = await postAfriForexScan(
        AFRIFOREX_DEMO_CUSTOMER_ID,
        [selectedMarket],
        crossAssetEnabled
      );

      const market =
        data?.results?.[0] ||
        data?.opportunities?.[0] ||
        null;

      if (!market) {
        throw new Error("AFRIAI_SCAN_EMPTY");
      }

      onScanResult?.(market);

      window.dispatchEvent(
        new CustomEvent("AFRIFOREX_SCAN_NOTIFICATION", {
          detail: {
            symbol: market?.displaySymbol || market?.symbol || selectedMarket,
            signal:
              market?.horizonSignals?.SCALP?.direction ||
              market?.signal?.state ||
              market?.signal?.direction ||
              "NEUTRAL",
            confidence:
              market?.horizonSignals?.SCALP?.confidence ??
              market?.signal?.confidence ??
              "N/A",
            price:
              market?.price ??
              market?.horizonSignals?.SCALP?.price ??
              "N/A",
            dataMode: market?.dataMode || "UNKNOWN",
            scannedAt: new Date().toISOString()
          }
        })
      );
    } catch (scanError) {
      console.error("AfriForex asset scan error:", scanError);
      setError(
        scanError?.message ||
          "AFRIAI_SCAN_UNAVAILABLE"
      );
    } finally {
      setScanning(false);
    }
  }

  return (
    <section className="afriforex-panel afriforex-asset-scanner">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">
            AFRIAI ASSET SCANNER
          </span>
          <h2>
            {selectedMarket || "Select an asset"}
          </h2>
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

      {error ? (
        <div className="afriforex-scanner-error">
          {error}
        </div>
      ) : null}
    </section>
  );
}
