import React from 'react'

const FormularioContacto = () => {
  return (
    <>
    <form className="max-w-lg mx-auto lg:mx-0">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-800 font-semibold mb-2">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="w-full border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="block text-gray-800 font-semibold mb-2">Apellido</label>
              <input type="text" id="apellido" name="apellido" className="w-full border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-4">
              <label htmlFor="telefono" className="block text-gray-800 font-semibold mb-2">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" className="w-full border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-4">
              <label htmlFor="direccion" className="block text-gray-800 font-semibold mb-2">Dirección</label>
              <input type="text" id="direccion" name="direccion" className="w-full border border-gray-300 rounded-md py-2 px-4" />
            </div>
            {/* Agrega más campos según tus necesidades */}
            <div className="text-center lg:text-left">
              <button type="submit" className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600">Enviar</button>
            </div>
          </form>
    </>
  )
}

export default FormularioContacto