import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "./index.scss";
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  <HashRouter basename={"/"}>
    <App />
  </HashRouter>,

  document.getElementById("root")
);
