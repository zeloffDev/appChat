import App from "@/App";
import reportWebVitals from "@/reportWebVitals";
import { DarkModeProvider } from "@Contexts/ThemeContext";
import { store } from "@store/Store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

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
