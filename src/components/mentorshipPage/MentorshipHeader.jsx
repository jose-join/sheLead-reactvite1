import React from 'react';
import { Link } from 'react-router-dom';

const MentorshipHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold italic">SheLead</Link>
          <nav className="ml-8 space-x-4">
            <Link to="/mentorship/inicio" className="text-white">Inicio</Link> {/* Modificado el enlace para ir a la página de inicio */}
            <Link to="/mentorship/chat" className="text-white">Chat</Link> {/* Cambiado "Empleos" por "Chat" */}
            <Link to="/mentorship/notifications" className="text-white">Notificaciones</Link>
          </nav>
        </div>
        <div>
          <Link to="/mentorship/miperfil" className="text-white">Mi Perfil</Link>
          <Link to="/" className="ml-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-400">Cerrar sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default MentorshipHeader;
