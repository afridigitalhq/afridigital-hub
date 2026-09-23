import { useCallback, useEffect, useState } from "react";
import { getAfriForexAccount, AFRIFOREX_DEMO_CUSTOMER_ID } from "../api/AfriForexClient";

const POLL_INTERVAL_MS = 5000;

export default function useAfriForexMarket() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      const data = await getAfriForexAccount(AFRIFOREX_DEMO_CUSTOMER_ID);
      console.log("AFRIFOREX ACCOUNT RESPONSE:", data);
      setAccount(data);
      setError(null);
    } catch (requestError) {
      console.error("AfriForex account error:", requestError);
      setError(requestError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();

    const interval = window.setInterval(refresh, POLL_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [refresh]);

  return {
    account,
    loading,
    error,
    connected: Boolean(account),
    refresh
  };
}
