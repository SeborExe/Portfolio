import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Sprawdzenie czy element root istnieje
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}