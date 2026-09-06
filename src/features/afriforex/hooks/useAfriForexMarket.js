import { useMemo } from "react";

export default function useAfriForexMarket() {
  return useMemo(
    () => ({
      market: null,
      loading: false,
      error: null,
      connected: false
    }),
    []
  );
}
