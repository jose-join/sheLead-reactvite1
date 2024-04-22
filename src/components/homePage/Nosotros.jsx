import React from 'react'
import nosotros from '../../image/nostros.jpg'

const Nosotros = () => {
  return (
    <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src={nosotros} alt="Descripción de la imagen" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-800 mb-4">Somos una comunidad dedicada a empoderar a mujeres mentoras y jóvenes, proporcionando recursos y apoyo para su crecimiento personal y profesional.</p>
            <p className="text-lg text-gray-800 mb-4">Nuestro objetivo es crear un espacio seguro y colaborativo donde las mujeres puedan conectarse, aprender unas de otras y alcanzar sus metas con confianza.</p>
            <p className="text-lg text-gray-800 mb-4">Nos esforzamos por promover la igualdad de género y fomentar el liderazgo femenino en todos los ámbitos de la sociedad.</p>
          </div>
        </div>
    </div>
  )
}

export default Nosotros
