import { useEffect, useRef, useState } from "react";
import { AfriTransport } from "../../../core/transport/AfriTransport";

export default function useAfriForexRealtime(selectedMarket = null) {
  const activeMarketRef = useRef(
    selectedMarket ||
      localStorage.getItem("afriforex:lastViewedMarket") ||
      null
  );
  const [tradeAlert, setTradeAlert] = useState(null);
  const [tradeAlertMarket, setTradeAlertMarket] = useState(() => {
    try {
      return localStorage.getItem("afriforex:tradeAlertMarket") || null;
    } catch {
      return null;
    }
  });
  const [marketUpdate, setMarketUpdate] = useState(null);
  const [tradeSignal, setTradeSignal] = useState(null);
  const [afriaiInsight, setAfriaiInsight] = useState(null);
  const lastInsightSignatureRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [lastEventAt, setLastEventAt] = useState(null); const [lastWsMessage, setLastWsMessage] = useState("NONE"); const [notificationStatus, setNotificationStatus] = useState("IDLE");
  const [wsRawMessage, setWsRawMessage] = useState("NONE");
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => localStorage.getItem("afriforex:notifications") === "ON");
  const [monitoredMarkets, setMonitoredMarkets] = useState(() => { try { const saved = JSON.parse(localStorage.getItem("afriforex:monitoredMarkets") || "[]"); return Array.isArray(saved) ? saved : []; } catch { return []; } });
  const notificationsEnabledRef = useRef(notificationsEnabled);
  const monitoredMarketsRef = useRef(monitoredMarkets);

  useEffect(() => {
    notificationsEnabledRef.current = notificationsEnabled;
  }, [notificationsEnabled]);

  useEffect(() => {
    if (tradeAlertMarket) {
      localStorage.setItem("afriforex:tradeAlertMarket", tradeAlertMarket);
    } else {
      localStorage.removeItem("afriforex:tradeAlertMarket");
    }
  }, [tradeAlertMarket]);

  const handleTradeAlertMarketChange = (market) => {
    setTradeAlertMarket(market || null);
  };

  const toggleNotifications = async () => {
    if (notificationsEnabled) {
      localStorage.setItem("afriforex:notifications", "OFF");
      setNotificationsEnabled(false);
      return;
    }
    if (!("Notification" in window)) return;
    const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
    if (permission === "granted") {
      localStorage.setItem("afriforex:notifications", "ON");
      setNotificationsEnabled(true);
    }
  };

  useEffect(() => {
    if (selectedMarket) {
      activeMarketRef.current = selectedMarket;
      localStorage.setItem("afriforex:lastViewedMarket", selectedMarket);
      setMarketUpdate(null);
      setTradeSignal(null);
      setTradeAlert(null);
      setAfriaiInsight(null);
      lastInsightSignatureRef.current = null;
      setLastEventAt(null);
    }
  }, [selectedMarket]);

  useEffect(() => {
    const ws = AfriTransport.stream("/ws/afriforex", async (message) => {
      setWsRawMessage(JSON.stringify(message));
      setLastWsMessage(message?.type === "event" ? `EVENT:${message?.event || "UNKNOWN"}` : message?.type || "UNKNOWN");
      if (message?.type === "init") {
        setConnected(true);
        return;
      }

      if (message?.type === "event") {
        const event = message?.event;
        const data = message?.data || {};
        const symbol =
          data?.symbol ||
          data?.position?.symbol ||
          data?.position?.instrument ||
          null;

        const normalizedEventSymbol = {
          "BINANCE:BTCUSDT": "BTC/USDT",
          "BINANCE:XRPUSDT": "XRP/USDT",
          "BINANCE:ETHUSDT": "ETH/USDT",
          "BINANCE:SOLUSDT": "SOL/USDT",
          "FX:EURUSD": "EUR/USD",
          "FX:GBPUSD": "GBP/USD",
          "FX:USDJPY": "USD/JPY",
          "FX:AUDUSD": "AUD/USD",
          "OANDA:XAUUSD": "XAU/USD"
        }[String(symbol || "").toUpperCase()] || symbol;

        const insightSymbol =
          data?.symbol ||
          data?.position?.symbol ||
          data?.position?.instrument ||
          activeMarketRef.current ||
          "Market";

        if (
          ["TRADE_OPENED", "TRADE_CLOSED"].includes(event) &&
          activeMarketRef.current &&
          normalizedEventSymbol &&
          normalizedEventSymbol !== activeMarketRef.current &&
          data?.source !== "AfriAI_NOTIFICATION_TEST"
        ) {
          return;
        }

        const meaningfulInsight = (() => {
          if (event === "TRADE_OPENED") {
            const position = data?.position || {};
            return {
              event,
              symbol: insightSymbol,
              text: `Open position detected. AfriAI is monitoring the live position and incoming market evidence.`,
              detail: `${position?.direction || "TRADE"} · ${position?.status || "OPEN"}`
            };
          }

          if (event === "TRADE_CLOSED") {
            const position = data?.position || {};
            return {
              event,
              symbol: insightSymbol,
              text: `Position closed. AfriAI has stopped monitoring the open position and is evaluating new market evidence.`,
              detail: `${position?.direction || "TRADE"} · CLOSED`
            };
          }

          if (event === "TRADE_ALERT") {
            const signal = data?.signal || {};
            const state = String(signal?.state || "NEUTRAL").toUpperCase();
            const confidence = signal?.confidence ?? "N/A";
            return {
              event,
              symbol: insightSymbol,
              text:
                state === "BUY" || state === "STRONG_BUY"
                  ? `AfriAI has detected bullish multi-timeframe alignment for ${insightSymbol}.`
                  : state === "SELL" || state === "STRONG_SELL"
                  ? `AfriAI has detected bearish multi-timeframe alignment for ${insightSymbol}.`
                  : `AfriAI is monitoring ${insightSymbol} while live evidence remains neutral.`,
              detail: `${state} · Confidence ${confidence}%`
            };
          }

          if (event === "TRADE_SIGNAL") {
            const signal = data?.signal || {};
            const state = String(signal?.state || "NEUTRAL").toUpperCase();
            const confidence = signal?.confidence ?? "N/A";
            return {
              event,
              symbol: insightSymbol,
              text: `AfriAI updated its live signal assessment for ${insightSymbol}.`,
              detail: `${state} · Confidence ${confidence}%`
            };
          }

          return null;
        })();

        if (meaningfulInsight) {
          const signature = JSON.stringify({
            event: meaningfulInsight.event,
            symbol: meaningfulInsight.symbol,
            text: meaningfulInsight.text,
            detail: meaningfulInsight.detail
          });

          if (signature !== lastInsightSignatureRef.current) {
            lastInsightSignatureRef.current = signature;
            const insight = {
              ...meaningfulInsight,
              updatedAt: message.emittedAt || new Date().toISOString()
            };
            setAfriaiInsight(insight);

            if (
              notificationsEnabledRef.current &&
              "Notification" in window &&
              Notification.permission === "granted"
            ) {
              const title = `AfriAI Insight — ${meaningfulInsight.symbol}`;
              const options = {
                body: `${meaningfulInsight.text} ${meaningfulInsight.detail}`,
                tag: `afriai-insight-${meaningfulInsight.symbol}`,
                renotify: true,
                data: {
                  type: "AFRIAI_INSIGHT",
                  event: meaningfulInsight.event,
                  url: "/user/forex#afriai-trade-alert",
                  insight
                }
              };

              try {
                if ("serviceWorker" in navigator) {
                  const registration = await navigator.serviceWorker.ready;
                  await registration.showNotification(title, options);
                  setNotificationStatus("INSIGHT:SENT:SW");
                } else {
                  new Notification(title, options);
                  setNotificationStatus("INSIGHT:SENT");
                }
              } catch (error) {
                try {
                  new Notification(title, options);
                  setNotificationStatus("INSIGHT:SENT:FALLBACK");
                } catch (fallbackError) {
                  setNotificationStatus(
                    `INSIGHT:ERROR:${fallbackError?.message || error?.message || "Notification failed"}`
                  );
                }
              }
            }
          }
        }

        if (
          ["TRADE_ALERT", "MARKET_UPDATE", "TRADE_SIGNAL"].includes(event)
        ) {
          if (!activeMarketRef.current && symbol) {
            activeMarketRef.current = normalizedEventSymbol;
            localStorage.setItem(
              "afriforex:lastViewedMarket",
              normalizedEventSymbol
            );
          }

          if (
            activeMarketRef.current &&
            symbol &&
            normalizedEventSymbol !== activeMarketRef.current &&
            data?.source !== "AfriAI_NOTIFICATION_TEST"
          ) {
            return;
          }
        }

        if (event === "TRADE_ALERT") {
          setTradeAlert(data);
          if (notificationsEnabledRef.current && "Notification" in window && Notification.permission === "granted") {
            const horizons = data?.horizons || {};
            const active = Object.entries(horizons).find(([, value]) => value?.tradeable) || null;
            const horizon = active?.[0] || "TRADE";
            const signal = active?.[1]?.signal || data?.signal?.state || "ALERT";
            const signalResult = data?.signal || {};
            const risk = data?.risk || {};
            const body = [
              `${data?.symbol || "Market"} — ${signal}`,
              `Confidence: ${signalResult?.confidence ?? "N/A"}%`,
              `Price: ${signalResult?.price ?? data?.price ?? "N/A"}`,
              `Tradeable: ${signalResult?.tradeable ? "YES" : "NO"}`,
              `Risk: ${risk?.status || "N/A"}`,
              `Data: ${data?.dataMode || "UNKNOWN"}`,
              `Horizon: ${horizon}`
            ].join(" • ");
            const title = `AfriAI Trade Alert — ${data?.symbol || "Market"}`;
            const options = {
              body,
              tag: `afriai-trade-alert-${data?.symbol || "market"}`,
              renotify: true,
              data: {
                type: "AFRIAI_TRADE_ALERT",
                event: "TRADE_ALERT",
                horizon,
                alert: data
              }
            };
            try {
              if ("serviceWorker" in navigator) {
                const registration = await navigator.serviceWorker.ready;
                await registration.showNotification(title, options);
                setNotificationStatus("SENT:SW");
              } else {
                new Notification(title, options);
                setNotificationStatus("SENT");
              }
            } catch (error) {
              try {
                new Notification(title, options);
                setNotificationStatus("SENT:FALLBACK");
              } catch (fallbackError) {
                setNotificationStatus(`ERROR:${fallbackError?.message || error?.message || "Notification failed"}`);
              }
            }
          } else {
            setNotificationStatus(`BLOCKED:App=${notificationsEnabledRef.current ? "ON" : "OFF"} Permission=${"Notification" in window ? Notification.permission : "unsupported"}`);
          }
        }

        if (event === "MARKET_UPDATE") {
          setMarketUpdate(data);
        }

        if (event === "TRADE_SIGNAL") {
          setTradeSignal(data);
        }

        if (
          ["TRADE_ALERT", "MARKET_UPDATE", "TRADE_SIGNAL"].includes(event)
        ) {
          setLastEventAt(
            message.emittedAt || new Date().toISOString()
          );
        }
      }
    });

    ws.onopen = () => { console.log("🔎 AFRIFOREX_BROWSER_WS_OPEN"); setConnected(true); };
    ws.onclose = (event) => { console.log("🔎 AFRIFOREX_BROWSER_WS_CLOSE", event.code, event.reason || "NO_REASON"); setConnected(false); };
    ws.onerror = (event) => { console.log("🔴 AFRIFOREX_BROWSER_WS_ERROR", event); setConnected(false); };

    return () => {
      ws.close();
    };
  }, []);

  return {
    tradeAlert,
    marketUpdate,
    tradeSignal,
    afriaiInsight,
    connected,
    lastEventAt,
    lastWsMessage,
    notificationStatus,
    wsRawMessage,
    notificationsEnabled,
    notificationPermission: "Notification" in window ? Notification.permission : "unsupported",
    toggleNotifications,
    tradeAlertMarket,
    onTradeAlertMarketChange: handleTradeAlertMarketChange
  };
}
