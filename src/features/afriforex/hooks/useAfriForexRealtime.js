import { useEffect, useRef, useState } from "react";
import { AfriTransport } from "../../../core/transport/AfriTransport";

export default function useAfriForexRealtime(selectedMarket = null) {
  const activeMarketRef = useRef(
    selectedMarket ||
      localStorage.getItem("afriforex:lastViewedMarket") ||
      null
  );
  const [tradeAlert, setTradeAlert] = useState(null);
  const [marketUpdate, setMarketUpdate] = useState(null);
  const [tradeSignal, setTradeSignal] = useState(null);
  const [connected, setConnected] = useState(false);
  const [lastEventAt, setLastEventAt] = useState(null);

  useEffect(() => {
    if (selectedMarket) {
      activeMarketRef.current = selectedMarket;
      localStorage.setItem("afriforex:lastViewedMarket", selectedMarket);
      setMarketUpdate(null);
      setTradeSignal(null);
      setTradeAlert(null);
      setLastEventAt(null);
    }
  }, [selectedMarket]);

  useEffect(() => {
    const ws = AfriTransport.stream("/ws/afriforex", (message) => {
      if (message?.type === "init") {
        setConnected(true);
        return;
      }

      if (message?.type === "event") {
        const event = message?.event;
        const data = message?.data || {};
        const symbol = data?.symbol || null;

        if (
          ["TRADE_ALERT", "MARKET_UPDATE", "TRADE_SIGNAL"].includes(event)
        ) {
          if (!activeMarketRef.current && symbol) {
            activeMarketRef.current = symbol;
            localStorage.setItem(
              "afriforex:lastViewedMarket",
              symbol
            );
          }

          if (
            activeMarketRef.current &&
            symbol &&
            symbol !== activeMarketRef.current
          ) {
            return;
          }
        }

        if (event === "TRADE_ALERT") {
          setTradeAlert(data);
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

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);
    ws.onerror = () => setConnected(false);

    return () => {
      ws.close();
    };
  }, []);

  return {
    tradeAlert,
    marketUpdate,
    tradeSignal,
    connected,
    lastEventAt
  };
}
