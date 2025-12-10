import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ContextPokeCardProvider from "./context/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextPokeCardProvider>
        <App />
      </ContextPokeCardProvider>
    </BrowserRouter>
  </StrictMode>,
);
