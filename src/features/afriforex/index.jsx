import React, { useEffect, useState } from "react";
import "./AfriForex.css";
import AfriForexHeader from "./components/AfriForexHeader";
import AfriForexChart from "./components/AfriForexChart";
import AfriForexTradeAlert from "./components/AfriForexTradeAlert";
import AfriForexAssetScanner from "./components/AfriForexAssetScanner";
import AfriForexDemoBalance from "./components/AfriForexDemoBalance";
import AfriForexPerformance from "./components/AfriForexPerformance";
import AfriForexAIChat from "./components/AfriForexAIChat";
import AfriForexTradeHistory from "./components/AfriForexTradeHistory";
import useAfriForexMarket from "./hooks/useAfriForexMarket";
import { closeAfriForexPosition } from "./api/AfriForexClient";
import useAfriForexRealtime from "./hooks/useAfriForexRealtime";

export default function AfriForex() {
  const [selectedMarket, setSelectedMarket] = useState(
    () => localStorage.getItem("afriforex:lastViewedMarket") || null
  );

  const { account, loading, error, connected, refresh } = useAfriForexMarket();
  const [closingPositionId, setClosingPositionId] = useState(null);
  const {
    tradeAlert,
    marketUpdate,
    tradeSignal,
    connected: realtimeConnected,
    lastEventAt,
    lastWsMessage,
    notificationStatus,
    wsRawMessage,
    notificationsEnabled,
    notificationPermission,
    toggleNotifications
  } = useAfriForexRealtime(selectedMarket);


  const handleClosePosition = async (positionId) => {
    setClosingPositionId(positionId);

    try {
      await closeAfriForexPosition(positionId, "demo-test");
      await refresh();
    } catch (closeError) {
      console.error("AfriForex close error:", closeError);
    } finally {
      setClosingPositionId(null);
    }
  };

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
        {error && (
          <div style={{ padding: "12px", marginBottom: "12px", color: "#ff6b6b", background: "rgba(255,0,0,0.08)", border: "1px solid rgba(255,0,0,0.25)", borderRadius: "8px" }}>
            AfriForex API ERROR: {error.message || String(error)}
          </div>
        )}
        <div style={{ padding: "8px 12px", marginBottom: "10px", border: "1px solid currentColor", borderRadius: "8px", fontSize: "13px" }}>
          Notification diagnostic: App={notificationsEnabled ? "ON" : "OFF"} | Permission={notificationPermission} | WebSocket={realtimeConnected ? "CONNECTED" : "DISCONNECTED"} | LastEvent={lastEventAt || "NONE"} | LastWS={lastWsMessage} | RawWS={wsRawMessage} | Notify={notificationStatus}
        </div>
        <div className="afriforex-main-column">
          <AfriForexDemoBalance
            account={account}
            loading={loading}
            onClosePosition={handleClosePosition}
            closingPositionId={closingPositionId}
            notificationsEnabled={notificationsEnabled}
            onToggleNotifications={toggleNotifications}
          />
          <AfriForexChart marketUpdate={marketUpdate} selectedMarket={selectedMarket} onMarketChange={setSelectedMarket} />
          <AfriForexTradeAlert tradeAlert={tradeAlert} tradeSignal={tradeSignal} connected={realtimeConnected} lastEventAt={lastEventAt} notificationsEnabled={notificationsEnabled} notificationPermission={notificationPermission} onToggleNotifications={toggleNotifications} />
          <AfriForexAssetScanner
            selectedMarket={selectedMarket}
            onMarketChange={setSelectedMarket}
            tradeAlert={tradeAlert}
            tradeSignal={tradeSignal}
            connected={realtimeConnected}
            lastEventAt={lastEventAt}
          />
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
