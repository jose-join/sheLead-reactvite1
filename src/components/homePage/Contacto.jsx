import React from 'react'
import avatar from '../../image/avatar.avif'
import FormularioCont from './FormularioContacto'

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img src={avatar} alt="Descripción de la imagen" className="w-full h-auto rounded-md" />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-left">Contáctanos</h2>
        <FormularioCont />
      </div>

    </div>
  )
}

export default Contacto
