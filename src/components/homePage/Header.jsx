import React from 'react';
import imagenLogo from '../../image/prueba-vite.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-red-200 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={imagenLogo} alt="Logo" className="h-12 w-auto" />
          <Link to="/" className="text-2xl lg:text-3xl font-bold italic ml-2">SheLead</Link> {/* Cambiado <a> por <Link> */}
        </div>
        <nav>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li><Link to="/como-funciona" className="text-lg lg:text-xl text-black hover:text-red-800">Como Funciona</Link></li> {/* Cambiado <a> por <Link> */}
            <li><Link to="/nosotros" className="text-lg lg:text-xl text-black hover:text-red-800">Nosotros</Link></li> {/* Cambiado <a> por <Link> */}
            <li><Link to="/mentoria" className="text-lg lg:text-xl text-black hover:text-red-800">Mentoria</Link></li> {/* Cambiado <a> por <Link> */}
            <li><Link to="/precios" className="text-lg lg:text-xl text-black hover:text-red-800">Precios</Link></li> {/* Cambiado <a> por <Link> */}
            <li><Link to="/contacto" className="text-lg lg:text-xl text-black hover:text-red-800">Contacto</Link></li> {/* Cambiado <a> por <Link> */}
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="bg-white text-black px-4 py-2 rounded-md mr-4 hover:bg-rose-500">Iniciar sesión</button>
          <Link to="/register" className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-rose-500">Registrarse</Link>
          <div className='hidden lg:flex items-center justify-center h-10 w-10 rounded-full bg-rose-400 ml-4 flex-shrink-0'>
            SHE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;