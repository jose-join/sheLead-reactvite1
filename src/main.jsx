import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Cambiado Switch por Routes
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import Register from './components/appPage/Registro.jsx';
import './index.css';

createRoot(document.getElementById('root')).render( // Cambiado ReactDOM.createRoot por createRoot
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* Cambiado Switch por Routes */}
        <Route exact path="/" element={<App />} /> {/* Cambiado component por element */}
        <Route path="/register" element={<Register />} /> {/* Cambiado component por element */}
      </Routes> {/* Cambiado Switch por Routes */}
    </BrowserRouter>
  </React.StrictMode>,
);