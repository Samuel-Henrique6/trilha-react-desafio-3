import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { GlobalStyle } from "./styles/global.js";

ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
