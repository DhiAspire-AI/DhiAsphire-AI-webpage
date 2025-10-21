// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename='/dhiaspire-ai.github.io/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
