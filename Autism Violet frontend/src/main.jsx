import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

// ✅ IMPORT ADD KARO
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* 🔥 WRAP APP */}
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);