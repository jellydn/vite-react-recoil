import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi-devtools";
import "virtual:windi.css";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
