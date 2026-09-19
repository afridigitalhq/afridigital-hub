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
import { closeAfriForexPosition, AFRIFOREX_DEMO_CUSTOMER_ID } from "./api/AfriForexClient";
import useAfriForexRealtime from "./hooks/useAfriForexRealtime";
import AfriForexEconomicCalendar from "./components/AfriForexEconomicCalendar";

export default function AfriForex() {
  const [selectedMarket, setSelectedMarket] = useState(
    () => localStorage.getItem("afriforex:lastViewedMarket") || null
  );
  const [crossAssetEnabled, setCrossAssetEnabled] = useState(false);

  const { account, loading, error, connected, refresh } = useAfriForexMarket();
  const [closingPositionId, setClosingPositionId] = useState(null);
  const [monitoredMarkets, setMonitoredMarkets] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("afriforex:monitoredMarkets") || "[]");
      const current = Array.isArray(saved) ? saved : [];
      const required = ["XRP/USDT", "EUR/USD", "XAU/USD", "AAPL"];
      return [...new Set([...current, ...required])];
    } catch {
      return ["XRP/USDT", "EUR/USD", "XAU/USD", "AAPL"];
    }
  });

  const isMarketMonitored = (market) => monitoredMarkets.includes(market);

  const toggleMarketMonitoring = (market) => {
    setMonitoredMarkets((current) => {
      const next = current.includes(market)
        ? current.filter((item) => item !== market)
        : [...current, market];
      localStorage.setItem("afriforex:monitoredMarkets", JSON.stringify(next));
      return next;
    });
  };
  const [latestActivity, setLatestActivity] = useState(null);

  const {
    tradeAlert,
    marketUpdate,
    tradeSignal,
    afriaiInsight,
    connected: realtimeConnected,
    lastEventAt,
    lastWsMessage,
    notificationStatus,
    wsRawMessage,
    notificationsEnabled,
    notificationPermission,
    toggleNotifications,
    primeNotificationSound,
    playNotificationSound,
    tradeAlertMarket,
    onTradeAlertMarketChange,
    economicCalendar
  } = useAfriForexRealtime(selectedMarket, monitoredMarkets);

  const handleTradeAlertMarketChange = (market) => {
    const nextMarket = market || null;
    setSelectedMarket(nextMarket);
    onTradeAlertMarketChange(nextMarket);
  };

  const handleClosePosition = async (positionId) => {
    setClosingPositionId(positionId);

    try {
      await closeAfriForexPosition(positionId, AFRIFOREX_DEMO_CUSTOMER_ID);
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
        <div className="afriforex-main-column">
          <AfriForexDemoBalance
            account={account}
            loading={loading}
            onClosePosition={handleClosePosition}
            closingPositionId={closingPositionId}
            notificationsEnabled={notificationsEnabled}
            onToggleNotifications={toggleNotifications}
          />
          <AfriForexChart marketUpdate={marketUpdate} selectedMarket={selectedMarket} onMarketChange={setSelectedMarket} connected={realtimeConnected} />
          <AfriForexTradeAlert latestActivity={latestActivity} selectedMarket={selectedMarket} monitoredMarkets={monitoredMarkets} isMarketMonitored={isMarketMonitored} onToggleMarketMonitoring={toggleMarketMonitoring} tradeAlertMarket={tradeAlertMarket} onTradeAlertMarketChange={handleTradeAlertMarketChange} tradeAlert={tradeAlert} tradeSignal={tradeSignal} afriaiInsight={afriaiInsight} connected={realtimeConnected} lastEventAt={lastEventAt} notificationsEnabled={notificationsEnabled} notificationPermission={notificationPermission} onToggleNotifications={toggleNotifications} crossAssetEnabled={crossAssetEnabled} onToggleCrossAsset={setCrossAssetEnabled} />
          <AfriForexAssetScanner
            crossAssetEnabled={crossAssetEnabled}
            selectedMarket={selectedMarket}
            onScanResult={(market) => setLatestActivity({ source: "scan", data: market, symbol: market?.symbol || selectedMarket, updatedAt: new Date().toISOString() })}
            onMarketChange={setSelectedMarket}
            tradeAlert={tradeAlert}
            tradeSignal={tradeSignal}
            connected={realtimeConnected}
            lastEventAt={lastEventAt}
            notificationPermission={notificationPermission}
            playNotificationSound={playNotificationSound}
          />

        <AfriForexEconomicCalendar
          economicCalendar={economicCalendar}
          selectedMarket={selectedMarket}
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
