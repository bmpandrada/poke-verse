import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ContextPokeCardProvider from "./context/ContextProvider.tsx";
import { HelmetProvider } from "@dr.pogodin/react-helmet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ContextPokeCardProvider>
          <App />
        </ContextPokeCardProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
