import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ContextPokeCardProvider from "./context/ContextProvider.tsx";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { VirtualProvider } from "./context/PokeVirtualContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ContextPokeCardProvider>
          <VirtualProvider>
            <App />
          </VirtualProvider>
        </ContextPokeCardProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
