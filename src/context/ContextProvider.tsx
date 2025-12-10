import { useEffect, useState, type ReactNode } from "react";
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
    let isMounted: boolean = true;
    const connectPokeApi = async () => {
      try {
        const res = await axios(url);
        const data = res.data;
        
        if (isMounted) {
          setPokeCard(data.results);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknow error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    connectPokeApi();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return (
    <ContextPokeCards.Provider value={{ pokeCard, error, loading }}>
      {children}
    </ContextPokeCards.Provider>
  );
};

export default ContextPokeCardProvider;
