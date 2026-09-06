import React, { useEffect, useRef } from "react";
import AfriForexMarketSelector from "./AfriForexMarketSelector";

const TRADINGVIEW_SYMBOL = "FX:EURUSD";

export default function AfriForexChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const container = chartRef.current;

    if (!container) return;

    container.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: TRADINGVIEW_SYMBOL,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="afriforex-panel afriforex-chart-panel">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label">LIVE MARKET CHART</span>
          <h2>EUR/USD Market Chart</h2>
        </div>

      </div>

      <AfriForexMarketSelector />

      <div
        ref={chartRef}
        className="afriforex-tradingview-chart"
      />
    </section>
  );
}
