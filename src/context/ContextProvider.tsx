import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { PokeListItem } from "../types";
import { ContextPokeCards } from "./ContextApi";
import axios from "axios";

interface ContextProps {
  children: ReactNode;
}
const ContextPokeCardProvider = ({ children }: ContextProps) => {
  const [pokeCard, setPokeCard] = useState<PokeListItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url = import.meta.env.VITE_API_POKECARDS_API;

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });

        setPokeCard(res.data.results);
      } catch (err) {
        if (axios.isCancel(err)) return;
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknow error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  const value = useMemo(() => {
    return { pokeCard, error, loading };
  }, [pokeCard, error, loading]);

  return (
    <ContextPokeCards.Provider value={value}>
      {children}
    </ContextPokeCards.Provider>
  );
};

export default ContextPokeCardProvider;
