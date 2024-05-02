import React from 'react';

const Chat = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Chat</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center">
            <img src="url_imagen_usuario" alt="Nombre Usuario" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Nombre Usuario</h3>
              <p className="text-gray-500">En línea</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Cerrar Chat</button>
        </div>
        <div className="overflow-y-auto max-h-80">
          {/* Aquí irían los mensajes del chat */}
          <div className="flex flex-col mb-4">
            <div className="flex justify-end mb-1">
              <p className="bg-blue-500 text-white rounded-lg p-2 max-w-xs break-words">Mensaje enviado por el usuario</p>
            </div>
            <p className="text-right text-sm text-gray-500">00:00</p>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex mb-1">
              <img src="url_imagen_mentora" alt="Nombre Mentora" className="w-8 h-8 rounded-full mr-2" />
              <p className="bg-gray-200 rounded-lg p-2 max-w-xs break-words">Mensaje recibido de la mentora</p>
            </div>
            <p className="text-sm text-gray-500">00:01</p>
          </div>
          {/* Más mensajes aquí */}
        </div>
        <form className="mt-4">
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Escribe un mensaje..." rows="3"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
