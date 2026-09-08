import React, { useEffect, useState } from "react";
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
import useAfriForexRealtime from "./hooks/useAfriForexRealtime";

export default function AfriForex() {
  const [selectedMarket, setSelectedMarket] = useState(
    () => localStorage.getItem("afriforex:lastViewedMarket") || null
  );

  const { account, loading, error, connected, refresh } = useAfriForexMarket();
  const {
    tradeAlert,
    marketUpdate,
    tradeSignal,
    connected: realtimeConnected,
    lastEventAt
  } = useAfriForexRealtime(selectedMarket);

  useEffect(() => {
    const symbol = marketUpdate?.symbol || tradeSignal?.symbol || tradeAlert?.symbol;

    if (!selectedMarket && symbol) {
      setSelectedMarket(symbol);
    }
  }, [marketUpdate, tradeSignal, tradeAlert, selectedMarket]);

  useEffect(() => {
    if (selectedMarket) {
      localStorage.setItem("afriforex:lastViewedMarket", selectedMarket);
    }
  }, [selectedMarket]);

  return (
    <main className="afriforex-shell">
      <AfriForexHeader />

      <section className="afriforex-dashboard-grid">
        <div className="afriforex-main-column">
          <AfriForexDemoBalance account={account} loading={loading} error={error} connected={connected} onRefresh={refresh} />
          <AfriForexChart marketUpdate={marketUpdate} selectedMarket={selectedMarket} />
          <AfriForexTradeAlert
            tradeAlert={tradeAlert}
            selectedMarket={selectedMarket}
            tradeSignal={tradeSignal}
            connected={realtimeConnected}
            lastEventAt={lastEventAt}
          />
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
