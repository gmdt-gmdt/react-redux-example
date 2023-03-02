import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import store from "./store/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
