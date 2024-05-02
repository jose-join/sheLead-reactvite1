import React from 'react';

const Inicio = () => {
  const mentores = [
    { id: 1, nombre: 'Mentora 1', profesion: 'Desarrolladora Web', imagen: 'url_imagen_1' },
    { id: 2, nombre: 'Mentora 2', profesion: 'Diseñadora Gráfica', imagen: 'url_imagen_2' },
    { id: 3, nombre: 'Mentora 3', profesion: 'Ingeniera de Software', imagen: 'url_imagen_3' },
  ];

  const contactarMentor = (id) => {
    // Lógica para contactar al mentor
    console.log(`Contactando a mentor con ID: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Inicio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mentores.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={mentor.imagen} alt={mentor.nombre} className="w-full h-auto rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{mentor.nombre}</h3>
            <p className="text-gray-600 mb-2">{mentor.profesion}</p>
            <button onClick={() => contactarMentor(mentor.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Contactar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
