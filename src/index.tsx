import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { AuthProvider } from "./modules/auth/context";
import "./index.css";
import "./assets/fonts/mulish.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
        <Routes />
    </AuthProvider>
  </React.StrictMode>
);