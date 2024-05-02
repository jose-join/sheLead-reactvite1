import React from 'react';

const MiPerfil = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Mi Perfil</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img src="url_imagen_usuario" alt="Nombre Usuario" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Nombre Usuario</h3>
            <p className="text-gray-500">Descripción breve del usuario</p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Intereses</h4>
          <ul className="list-disc pl-4">
            <li>Interés 1</li>
            <li>Interés 2</li>
            <li>Interés 3</li>
            {/* Agrega más intereses aquí si es necesario */}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Experiencia</h4>
          <ul className="list-disc pl-4">
            <li>Experiencia 1</li>
            <li>Experiencia 2</li>
            <li>Experiencia 3</li>
            {/* Agrega más experiencias aquí si es necesario */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiPerfil;
