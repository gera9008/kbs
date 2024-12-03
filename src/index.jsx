import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY ?? "UNKNOWN";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App secretKey={SECRET_KEY} />
  </React.StrictMode>
);
