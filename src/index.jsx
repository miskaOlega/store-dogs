import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesMain from "./RoutesMain.jsx";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RoutesMain />
    </BrowserRouter>
  </React.StrictMode>
);
