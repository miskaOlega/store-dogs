import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesMain from "./RoutesMain.jsx";
import { BrowserRouter } from 'react-router-dom';
import Context from './server/accounts.js';
import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context><RoutesMain /></Context>
    </BrowserRouter>
  </React.StrictMode>
);
