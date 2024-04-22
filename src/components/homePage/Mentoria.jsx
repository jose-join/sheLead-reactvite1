import React from 'react'
import mentora1 from '../../image/mentora1.avif'
import mentora2 from '../../image/mentora2.jpeg'

const Mentoria = () => {
  // Aquí puedes definir un arreglo de objetos con la información de cada mentora
  const mentoras = [
    {
      nombre: 'Nombre Mentora 1',
      imagen: mentora1,
      descripcion: 'Descripción de la mentora 1...',
    },
    {
      nombre: 'Nombre Mentora 2',
      imagen: mentora2,
      descripcion: 'Descripción de la mentora 2...',
    },
    // Agrega más objetos para cada mentora que desees mostrar
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Nuestras Mentoras</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {mentoras.map((mentora, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={mentora.imagen} alt={mentora.nombre} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{mentora.nombre}</h3>
              <p className="text-gray-700">{mentora.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mentoria
