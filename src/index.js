import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from "./context/LocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>
);
