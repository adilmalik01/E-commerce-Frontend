import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/context";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import * as serviceWorker from "./service-worker";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {" "}
        {/* Wrap with QueryClientProvider */}
        <ContextProvider>
          <App />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Register the service worker for PWA
if ("serviceworker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(serviceWorker);
  });
}
reportWebVitals();
