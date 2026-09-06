import React from "react";
import "./AfriForex.css";
import AfriForexHeader from "./components/AfriForexHeader";
import AfriForexMarketSelector from "./components/AfriForexMarketSelector";
import AfriForexChart from "./components/AfriForexChart";
import AfriForexTradeAlert from "./components/AfriForexTradeAlert";
import AfriForexActiveTrade from "./components/AfriForexActiveTrade";
import AfriForexDemoBalance from "./components/AfriForexDemoBalance";
import AfriForexPerformance from "./components/AfriForexPerformance";
import AfriForexAIChat from "./components/AfriForexAIChat";
import AfriForexTradeHistory from "./components/AfriForexTradeHistory";

export default function AfriForex() {
  return (
    <main className="afriforex-shell">
      <AfriForexHeader />
      <AfriForexMarketSelector />

      <section className="afriforex-dashboard-grid">
        <div className="afriforex-main-column">
          <AfriForexDemoBalance />
          <AfriForexChart />
          <AfriForexTradeAlert />
          <AfriForexActiveTrade />
          <AfriForexTradeHistory />
        </div>

        <aside className="afriforex-side-column">
          <AfriForexPerformance />
          <AfriForexAIChat />
        </aside>
      </section>
    </main>
  );
}
