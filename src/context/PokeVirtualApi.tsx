import { createContext, useContext } from "react";
import type { VirtualContextType } from "../types";

export const VirtualContext = createContext<VirtualContextType | null>(null);

export const useVirtualSettings = () => {
  const ctx = useContext(VirtualContext);
  if (!ctx) throw new Error("useVirtualSettings must be inside provider");
  return ctx;
};
