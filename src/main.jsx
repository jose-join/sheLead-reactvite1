import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Login from './components/appPage/Login.jsx'; // Importa el componente de Login
import Register from './components/appPage/Registro.jsx';
import MentorshipPlatform from './components/mentorshipPage/MentorshipHeader.jsx'; // Importa el componente de la plataforma de mentoría
import Inicio from './components/mentorshipPage/Inicio.jsx';
import Chat from './components/mentorshipPage/Chat.jsx';
import MiPerfil from './components/mentorshipPage/MiPerfil.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Agrega esta nueva ruta para el componente Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/mentorship" element={<MentorshipPlatform />} /> {/* Nueva ruta para la plataforma de mentoría */}
        <Route path="/mentorship/inicio" element={<Inicio />} /> {/* Ruta para la página de inicio */}
        <Route path="/mentorship/chat" element={<Chat />} />
        <Route path="/mentorship/miperfil" element={<MiPerfil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
