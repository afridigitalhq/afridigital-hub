import React, { useState } from "react";
import { postAfriForexScan } from "../api/AfriForexClient";
import AfriForexMarketSelector from "./AfriForexMarketSelector";

const DEMO_CUSTOMER_ID = "demo-test";

export default function AfriForexAssetScanner({
  selectedMarket,
  onMarketChange,
  onScanResult,
}) {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");

  async function handleScan() {
    if (!selectedMarket) return;

    setScanning(true);
    setError("");

    try {
      const data = await postAfriForexScan(
        DEMO_CUSTOMER_ID,
        [selectedMarket]
      );

      const market =
        data?.results?.[0] ||
        data?.opportunities?.[0] ||
        null;

      if (!market) {
        throw new Error("AFRIAI_SCAN_EMPTY");
      }

      onScanResult?.(market);
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
