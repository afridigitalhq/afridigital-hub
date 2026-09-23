import React, { useEffect, useState } from "react";
import {
  getAfriForexMonitoring,
  saveAfriForexMonitoring
} from "./api/AfriForexClient";
import "./AfriForex.css";
import AfriForexHeader from "./components/AfriForexHeader";
import AfriForexChart from "./components/AfriForexChart";
import AfriForexTradeAlert from "./components/AfriForexTradeAlert";
import AfriForexPriceTargetAlerts from "./components/AfriForexPriceTargetAlerts";
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
      const saved = JSON.parse(
        localStorage.getItem("afriforex:monitoredMarkets") || "[]"
      );
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  const isMarketMonitored = (market) => monitoredMarkets.includes(market);

  useEffect(() => {
    let active = true;

    getAfriForexMonitoring(AFRIFOREX_DEMO_CUSTOMER_ID)
      .then((data) => {
        if (!active) return;

        const backendMarkets = Array.isArray(data?.monitoredMarkets)
          ? data.monitoredMarkets
          : [];

        setMonitoredMarkets((current) => {
          const mergedMarkets = [
            ...new Set([
              ...(Array.isArray(current) ? current : []),
              ...backendMarkets
            ])
          ];

          localStorage.setItem(
            "afriforex:monitoredMarkets",
            JSON.stringify(mergedMarkets)
          );

          void saveAfriForexMonitoring(
            AFRIFOREX_DEMO_CUSTOMER_ID,
            mergedMarkets
          ).catch((error) => {
            console.error("AfriForex monitoring reconciliation error:", error);
          });

          return mergedMarkets;
        });
      })
      .catch((error) => {
        console.error("AfriForex monitoring load error:", error);
      });

    return () => {
      active = false;
    };
  }, []);

  const toggleMarketMonitoring = (market) => {
    const normalizedMarket = String(market || "").trim().toUpperCase();
    if (!normalizedMarket) return;

    setMonitoredMarkets((current) => {
      const next = current.includes(normalizedMarket)
        ? current.filter((item) => item !== normalizedMarket)
        : [...current, normalizedMarket];

      localStorage.setItem(
        "afriforex:monitoredMarkets",
        JSON.stringify(next)
      );

      void saveAfriForexMonitoring(
        AFRIFOREX_DEMO_CUSTOMER_ID,
        next
      ).catch((error) => {
        console.error("AfriForex monitoring save error:", error);
      });

      return next;
    });
  };

  const addAndMonitorScannedAsset = (market) => {
    const normalizedMarket = String(
      market?.displaySymbol || market?.symbol || ""
    ).trim().toUpperCase();

    if (!normalizedMarket || monitoredMarkets.includes(normalizedMarket)) {
      return;
    }

    toggleMarketMonitoring(normalizedMarket);
  };
  const [latestActivity, setLatestActivity] = useState(null);
  const [scanEconomicCalendar, setScanEconomicCalendar] = useState(null);

  const {
    tradeAlert,
    monitoredTradeAlertsBySymbol,
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
    economicCalendar,
    latestActivity: realtimeLatestActivity
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
          <AfriForexAssetScanner
            crossAssetEnabled={crossAssetEnabled}
            selectedMarket={selectedMarket}
            onScanResult={(market) => {
              const scannedSymbol = market?.displaySymbol || market?.symbol || selectedMarket || null;
              if (scannedSymbol) setSelectedMarket(scannedSymbol);
              setLatestActivity({ source: "scan", data: market, symbol: scannedSymbol, updatedAt: new Date().toISOString() });
              setScanEconomicCalendar(market?.economicCalendar || null);
            }}
            onMarketChange={setSelectedMarket}
            tradeAlert={tradeAlert}
            tradeSignal={tradeSignal}
            connected={realtimeConnected}
            lastEventAt={lastEventAt}
            notificationPermission={notificationPermission}
            playNotificationSound={playNotificationSound}
          />
          <AfriForexTradeAlert latestActivity={realtimeLatestActivity || latestActivity} selectedMarket={selectedMarket} monitoredMarkets={monitoredMarkets} monitoredTradeAlertsBySymbol={monitoredTradeAlertsBySymbol} isMarketMonitored={isMarketMonitored} onToggleMarketMonitoring={toggleMarketMonitoring} onAddAndMonitorScannedAsset={addAndMonitorScannedAsset} tradeAlertMarket={tradeAlertMarket} onTradeAlertMarketChange={handleTradeAlertMarketChange} tradeAlert={tradeAlert} tradeSignal={tradeSignal} afriaiInsight={afriaiInsight} connected={realtimeConnected} lastEventAt={lastEventAt} notificationsEnabled={notificationsEnabled} notificationPermission={notificationPermission} onToggleNotifications={toggleNotifications} crossAssetEnabled={crossAssetEnabled} onToggleCrossAsset={setCrossAssetEnabled} economicCalendar={scanEconomicCalendar || economicCalendar} />
          <AfriForexPriceTargetAlerts
            selectedMarket={selectedMarket}
            marketUpdate={marketUpdate}
            latestActivity={realtimeLatestActivity || latestActivity}
            tradeAlert={tradeAlert}
            notificationsEnabled={notificationsEnabled}
            notificationPermission={notificationPermission}
            playNotificationSound={playNotificationSound}
          />


        <AfriForexEconomicCalendar
          economicCalendar={scanEconomicCalendar || economicCalendar}
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
