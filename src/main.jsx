// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename='/DhiAsphire-AI-webpage/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
