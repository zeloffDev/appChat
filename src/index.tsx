import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./Contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
