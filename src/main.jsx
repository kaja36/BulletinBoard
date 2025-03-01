import React from "react"; // Reactをインポート
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./react-router/AppRoutes.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
