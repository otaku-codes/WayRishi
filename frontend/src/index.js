// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import AppContextProvider from "./context/AppContext"; 

// Suppress all console messages
console.warn = () => {};
console.error = () => {};
console.log = () => {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
