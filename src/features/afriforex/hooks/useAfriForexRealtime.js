import { useCallback, useEffect, useRef, useState } from "react";
import { AfriTransport } from "../../../core/transport/AfriTransport";

export default function useAfriForexRealtime(selectedMarket = null, monitoredMarkets = []) {
  const activeMarketRef = useRef(
    selectedMarket ||
      localStorage.getItem("afriforex:lastViewedMarket") ||
      null
  );
  const [tradeAlert, setTradeAlert] = useState(null);
  const [monitoredTradeAlertsBySymbol, setMonitoredTradeAlertsBySymbol] = useState({});
  const [tradeAlertMarket, setTradeAlertMarket] = useState(() => {
    try {
      return localStorage.getItem("afriforex:tradeAlertMarket") || null;
    } catch {
      return null;
    }
  });
  const [marketUpdate, setMarketUpdate] = useState(null);
  const [marketUpdatesBySymbol, setMarketUpdatesBySymbol] = useState({});
  const [economicCalendarBySymbol, setEconomicCalendarBySymbol] = useState({});
  const [tradeSignal, setTradeSignal] = useState(null);
  const [latestActivity, setLatestActivity] = useState(null);
  const [afriaiInsight, setAfriaiInsight] = useState(null);
  const lastInsightSignatureRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [lastEventAt, setLastEventAt] = useState(null); const [lastWsMessage, setLastWsMessage] = useState("NONE"); const [notificationStatus, setNotificationStatus] = useState("IDLE");
  const [wsRawMessage, setWsRawMessage] = useState("NONE");
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => localStorage.getItem("afriforex:notifications") === "ON");
  const notificationsEnabledRef = useRef(notificationsEnabled);
  const audioContextRef = useRef(null);

  const primeNotificationSound = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioContextRef.current) audioContextRef.current = new AudioContext();
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume().catch(() => {});
      }
    } catch {}
  }, []);

  const playNotificationSound = useCallback(async () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioContextRef.current) audioContextRef.current = new AudioContext();
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") await ctx.resume();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, ctx.currentTime);
      oscillator.frequency.setValueAtTime(660, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.3);
    } catch {}
  }, []);
  const monitoredMarketsRef = useRef(monitoredMarkets);

  useEffect(() => {
    monitoredMarketsRef.current = Array.isArray(monitoredMarkets) ? monitoredMarkets : [];
  }, [monitoredMarkets]);

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
    if (permission !== "granted") {
      setNotificationStatus(`BLOCKED:App=OFF Permission=${permission}`);
      return;
    }

    if (!("serviceWorker" in navigator)) {
      setNotificationStatus("ERROR:ServiceWorker=unsupported");
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      if (!registration) {
        setNotificationStatus("ERROR:ServiceWorker=not-ready");
        return;
      }

      localStorage.setItem("afriforex:notifications", "ON");
      primeNotificationSound();
      setNotificationsEnabled(true);
      setNotificationStatus("READY:App=ON Permission=granted ServiceWorker=READY");
    } catch (error) {
      setNotificationStatus(`ERROR:ServiceWorker=${error?.message || "not-ready"}`);
    }
  };

  useEffect(() => {
    if (selectedMarket) {
      activeMarketRef.current = selectedMarket;
      localStorage.setItem("afriforex:lastViewedMarket", selectedMarket);
    }
  }, [selectedMarket]);

  useEffect(() => {
    const handleScanNotification = (event) => {
      const data = event?.detail || {};

      if (
        !notificationsEnabledRef.current ||
        !("Notification" in window) ||
        Notification.permission !== "granted"
      ) {
        setNotificationStatus(
          `SCAN:BLOCKED:App=${notificationsEnabledRef.current ? "ON" : "OFF"} Permission=${"Notification" in window ? Notification.permission : "unsupported"}`
        );
        return;
      }

      const symbol = data.symbol || activeMarketRef.current || "Market";
      const signal = String(data.signal || "NEUTRAL").toUpperCase();

      const displaySignal =
        signal === "STRONG_BUY"
          ? "STRONG BUY"
          : signal === "STRONG_SELL"
          ? "STRONG SELL"
          : signal === "INCOMING_REVERSAL"
          ? "INCOMING REVERSAL"
          : signal;

      const title = `AfriForex Scan — ${symbol}`;
      const body = [
        `Signal: ${displaySignal}`,
        `Confidence: ${data.confidence ?? "N/A"}%`,
        `Price: ${data.price ?? "N/A"}`,
        `Data: ${data.dataMode || "UNKNOWN"}`
      ].join(" • ");

      const options = {
        body,
        tag: `afriforex-scan-${symbol}-${data.scannedAt || Date.now()}`,
        renotify: true,
        data: {
          type: "AFRIFOREX_SCAN",
          event: "AFRIFOREX_SCAN_NOTIFICATION",
          symbol,
          signal: displaySignal,
          scannedAt: data.scannedAt || new Date().toISOString()
        }
      };

      try {
        playNotificationSound();

        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.ready
            .then((registration) =>
              registration.showNotification(title, options)
            )
            .then(() => setNotificationStatus("SCAN:SENT:SW"))
            .catch(() => {
              try {
                new Notification(title, options);
                setNotificationStatus("SCAN:SENT:FALLBACK");
              } catch (error) {
                setNotificationStatus(
                  `SCAN:ERROR:${error?.message || "Notification failed"}`
                );
              }
            });
        } else {
          new Notification(title, options);
          setNotificationStatus("SCAN:SENT");
        }
      } catch (error) {
        setNotificationStatus(
          `SCAN:ERROR:${error?.message || "Notification failed"}`
        );
      }
    };

    window.addEventListener(
      "AFRIFOREX_SCAN_NOTIFICATION",
      handleScanNotification
    );

    return () => {
      window.removeEventListener(
        "AFRIFOREX_SCAN_NOTIFICATION",
        handleScanNotification
      );
    };
  }, [playNotificationSound]);

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

        const monitoredList = monitoredMarketsRef.current;
        const monitoredEvent = [
          "TRADE_ALERT",
          "HORIZON_ALERT",
          "MARKET_UPDATE",
          "TRADE_SIGNAL",
          "AFRIFOREX_INTELLIGENCE_UPDATE",
          "TRADE_OPENED",
          "TRADE_CLOSED"
        ].includes(event);

        if (
          monitoredEvent &&
          normalizedEventSymbol &&
          monitoredList.length > 0 &&
          !monitoredList.includes(normalizedEventSymbol) &&
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
                  : state === "INCOMING_REVERSAL"
                  ? `AfriAI has detected an incoming directional reversal on ${insightSymbol}.`
                  : `AfriAI is monitoring ${insightSymbol} while live evidence remains neutral.`,
              detail: `${state} · Confidence ${confidence}%`
            };
          }

          if (event === "HORIZON_ALERT") {
            const horizon = String(data?.horizon || "HORIZON").toUpperCase();
            const readiness = String(data?.readiness || "DEVELOPING").toUpperCase();
            const signal = data?.signal || {};
            const direction = String(
              signal?.direction || "NEUTRAL"
            ).toUpperCase();
            const confidence = signal?.confidence ?? "N/A";
            const scalp = data?.scalp || {};
            const scalpDirection = String(
              scalp?.direction || "NEUTRAL"
            ).toUpperCase();

            const horizonLabel =
              horizon.charAt(0) + horizon.slice(1).toLowerCase();

            const directionLabel =
              direction === "STRONG_BUY"
                ? "STRONG BUY"
                : direction === "STRONG_SELL"
                ? "STRONG SELL"
                : direction;

            const scalpLabel =
              scalpDirection === "STRONG_BUY"
                ? "STRONG BUY"
                : scalpDirection === "STRONG_SELL"
                ? "STRONG SELL"
                : scalpDirection;

            let text;

            if (readiness === "ENTRY_APPROACHING") {
              text = `AfriAI warning: the ${horizonLabel} entry for ${insightSymbol} is approaching.`;
            } else if (readiness === "READY_PENDING_SCALP") {
              text = `AfriAI pre-alert: the ${horizonLabel} setup on ${insightSymbol} is internally ready, but is awaiting SCALP alignment.`;
            } else if (readiness === "READY_WITH_SCALP_ALIGNMENT") {
              text = `AfriAI monitoring: ${horizonLabel} conditions on ${insightSymbol} align with the current SCALP direction.`;
            } else if (readiness === "WARNING") {
              text = `AfriAI warning: ${horizonLabel} evidence on ${insightSymbol} is conflicting with the current market structure.`;
            } else {
              text = `AfriAI is monitoring developing ${horizonLabel} conditions on ${insightSymbol}.`;
            }

            return {
              event,
              symbol: insightSymbol,
              text,
              detail: `${horizonLabel} ${directionLabel} · ${readiness} · SCALP ${scalpLabel} · Confidence ${confidence}%`
            };
          }

          if (event === "AFRIFOREX_INTELLIGENCE_UPDATE") {
            const previous = data?.previousState || {};
            const current = data?.currentState || {};
            const changes = data?.changes || {};
            const timeframeChanges = Object.entries(
              changes?.timeframes || {}
            )
              .filter(([, changed]) => changed)
              .map(([timeframe]) => {
                const before =
                  previous?.timeframes?.[timeframe] || "NEUTRAL";
                const after =
                  current?.timeframes?.[timeframe] || "NEUTRAL";
                return `${timeframe} ${before} → ${after}`;
              });

            const details = [];

            if (timeframeChanges.length) {
              details.push(...timeframeChanges);
            }

            if (changes?.scalpDirection) {
              details.push(
                `SCALP ${previous?.scalpDirection || "NEUTRAL"} → ${current?.scalpDirection || "NEUTRAL"}`
              );
            }

            if (changes?.tradeDecision) {
              details.push(
                `Trade ${previous?.tradeDecision || "WAIT"} → ${current?.tradeDecision || "WAIT"}`
              );
            }

            if (changes?.setupState) {
              details.push(
                `Setup ${previous?.setupState || "DEVELOPING"} → ${current?.setupState || "DEVELOPING"}`
              );
            }

            if (changes?.reversal) {
              const reversal = current?.reversal || {};
              details.push(
                reversal?.status === "INCOMING_REVERSAL"
                  ? `Reversal ${reversal.direction || "UNKNOWN"} ${reversal.strengthPercent ?? 0}%`
                  : "Reversal cleared"
              );
            }

            if (changes?.economicCalendar) {
              const calendar = current?.economicCalendar || {};
              details.push(
                calendar?.imminent
                  ? "Economic event imminent"
                  : "Economic-calendar state changed"
              );
            }

            if (changes?.scalpMomentumStrengthPercent) {
              details.push(
                `SCALP strength ${current?.scalpMomentumStrengthPercent ?? 0}%`
              );
            }

            return {
              event,
              symbol: insightSymbol,
              text: `AfriAI detected a meaningful market-intelligence change on ${insightSymbol}.`,
              detail: details.length
                ? details.join(" · ")
                : "Market intelligence state changed."
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
            setLatestActivity({
              source: "realtime",
              event,
              symbol: insightSymbol,
              data,
              updatedAt: insight.updatedAt
            });

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
                playNotificationSound();
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

        if (event === "AFRIFOREX_INTELLIGENCE_UPDATE") {
          const monitoringSymbol =
            normalizedEventSymbol ||
            String(data?.symbol || insightSymbol || "").trim().toUpperCase();

          if (
            monitoringSymbol &&
            monitoredList.includes(monitoringSymbol)
          ) {
            const currentState = data?.currentState || {};
            const currentSignal = {
              direction: String(
                currentState?.scalpDirection || "NEUTRAL"
              ).toUpperCase(),
              alertState: String(
                currentState?.scalpDirection || "NEUTRAL"
              ).toUpperCase(),
              setupState: String(
                currentState?.setupState || "DEVELOPING"
              ).toUpperCase(),
              tradeDecision: String(
                currentState?.tradeDecision || "WAIT"
              ).toUpperCase(),
              confidence: Number(currentState?.confidence ?? 0),
              scalpMomentumStrengthPercent: Number(
                currentState?.scalpMomentumStrengthPercent ?? 0
              ),
              reversal: currentState?.reversal || null,
              tradeable: Boolean(
                currentState?.tradeDecision === "ENTER" &&
                String(currentState?.scalpDirection || "NEUTRAL").toUpperCase() !== "NEUTRAL"
              )
            };

            const monitoredTradeAlert = {
              ...data,
              symbol: data?.symbol || monitoringSymbol,
              displaySymbol: data?.displaySymbol || data?.symbol || monitoringSymbol,
              source: "MONITORED",
              signal: {
                ...(data?.signal || {}),
                ...currentSignal
              },
              horizonSignals: {
                ...(data?.horizonSignals || {}),
                SCALP: {
                  ...(data?.horizonSignals?.SCALP || {}),
                  ...currentSignal
                }
              },
              economicCalendar:
                data?.currentState?.economicCalendar ||
                data?.economicCalendar ||
                null,
              observedAt:
                data?.observedAt ||
                message.emittedAt ||
                new Date().toISOString()
            };

            setMonitoredTradeAlertsBySymbol((current) => ({
              ...current,
              [monitoringSymbol]: monitoredTradeAlert
            }));

            if (
              String(activeMarketRef.current || "").trim().toUpperCase() ===
              monitoringSymbol
            ) {
              setTradeAlert(monitoredTradeAlert);
            }
          }
        }

        if (event === "TRADE_ALERT") {
          setTradeAlert(data);

          const ecSymbol = normalizedEventSymbol || activeMarketRef.current || null;

          if (ecSymbol && data?.economicCalendar) {
            setEconomicCalendarBySymbol((current) => ({
              ...current,
              [ecSymbol]: data.economicCalendar
            }));
          }
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
              playNotificationSound();
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
          const symbol = normalizedEventSymbol || activeMarketRef.current || null;

          if (symbol) {
            setMarketUpdatesBySymbol((current) => ({
              ...current,
              [symbol]: data
            }));

            if (data?.economicCalendar) {
              setEconomicCalendarBySymbol((current) => ({
                ...current,
                [symbol]: data.economicCalendar
              }));
            }
          }

          if (
            !symbol ||
            !activeMarketRef.current ||
            symbol === String(activeMarketRef.current).trim().toUpperCase()
          ) {
            setMarketUpdate(data);
          }
        }

        if (event === "TRADE_SIGNAL") {
          setTradeSignal(data);

          const signalSymbol = normalizedEventSymbol || activeMarketRef.current || null;

          if (signalSymbol && data?.economicCalendar) {
            setEconomicCalendarBySymbol((current) => ({
              ...current,
              [signalSymbol]: data.economicCalendar
            }));
          }
        }

          if (
            ["TRADE_ALERT", "MARKET_UPDATE", "TRADE_SIGNAL"].includes(event)
          ) {
            setLatestActivity({
              source: "realtime",
              event,
              symbol: normalizedEventSymbol || insightSymbol,
              data,
              updatedAt:
                message.emittedAt || new Date().toISOString()
            });
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

  const selectedMarketKey = selectedMarket
    ? String(selectedMarket).trim().toUpperCase()
    : null;

  const selectedMarketUpdate =
    selectedMarketKey
      ? marketUpdatesBySymbol[selectedMarketKey] || null
      : null;

  const economicCalendar =
    selectedMarketKey
      ? economicCalendarBySymbol[selectedMarketKey] || null
      : null;

  return {
    tradeAlert,
    monitoredTradeAlertsBySymbol,
    economicCalendar,
    economicCalendarBySymbol,
    marketUpdate: selectedMarketUpdate || marketUpdate,
    marketUpdatesBySymbol,
    tradeSignal,
      latestActivity,
    afriaiInsight,
    connected,
    lastEventAt,
    lastWsMessage,
    notificationStatus,
    wsRawMessage,
    notificationsEnabled,
    monitoredMarkets,
    notificationPermission: "Notification" in window ? Notification.permission : "unsupported",
    toggleNotifications,
    primeNotificationSound,
    playNotificationSound,
    tradeAlertMarket,
    onTradeAlertMarketChange: handleTradeAlertMarketChange
  };
}
