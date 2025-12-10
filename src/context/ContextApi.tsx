import { useContext } from "react";
import { createContext } from "react";
import type { PokeListItem } from "../types";

interface ContextValue {
  pokeCard: PokeListItem[];
  loading: boolean;
  error: string | null;
}

export const ContextPokeCards = createContext<ContextValue | null>(null);

export function usePokeCardApi() {
  const context = useContext(ContextPokeCards);
  if (!context) {
    throw new Error(
      "sePokeCardApi must be used within ContextPokeCardProvider",
    );
  }
  return context;
}
