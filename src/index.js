import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./body.js";
import { BrowserRouter } from "react-router-dom";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  </React.StrictMode>
);
