import React from "react";
import "./AfriForex.css";
import AfriForexHeader from "./components/AfriForexHeader";
import AfriForexChart from "./components/AfriForexChart";
import AfriForexTradeAlert from "./components/AfriForexTradeAlert";
import AfriForexActiveTrade from "./components/AfriForexActiveTrade";
import AfriForexDemoBalance from "./components/AfriForexDemoBalance";
import AfriForexPerformance from "./components/AfriForexPerformance";
import AfriForexAIChat from "./components/AfriForexAIChat";
import AfriForexTradeHistory from "./components/AfriForexTradeHistory";
import useAfriForexMarket from "./hooks/useAfriForexMarket";

export default function AfriForex() {
  const { account, loading, error, connected, refresh } = useAfriForexMarket();

  return (
    <main className="afriforex-shell">
      <AfriForexHeader />

      <section className="afriforex-dashboard-grid">
        <div className="afriforex-main-column">
          <AfriForexDemoBalance account={account} loading={loading} error={error} connected={connected} onRefresh={refresh} />
          <AfriForexChart />
          <AfriForexTradeAlert />
          <AfriForexActiveTrade account={account} loading={loading} />
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
