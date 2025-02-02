import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import AppContextProvider from "./lib/contexts/AppProvider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
);
