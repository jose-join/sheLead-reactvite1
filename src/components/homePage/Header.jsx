  import React from 'react'
  import imagenLogo from '../../image/lorem-lorem.svg'
  import { Link } from 'react-router-dom';


  const Header = () => {
    return (
      <div className="sticky top-0 z-50 bg-white p-4">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="flex items-center mb-4 lg:mb-0 ml-10">
            <img src={imagenLogo} alt="Logo" className="h-6 w-auto w"  />
            <a href="#inicio" className="text-2xl lg:text-3xl font-bold italic ml-2"></a>
          </div>
          <nav className='flex items-center justify-center'>
            <div className='w-auto bg-slate-100 rounded-lg flex justify-center items-center mr-20 p-0.5'>
              <label className="relative">
                <svg width="1em" height="1em" viewBox="0 0 20 20" className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-30 group-betterhover:hover:text-gray-70">
                  <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <input placeholder='Buscar' className='pl-10 bg-transparent text-xs ' type="text" />
              </label>
            </div>  
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 ">
              <li><a href="#como-funciona" className="text-xs lg:text-xs text-black hover:text-red-800">Como Funciona</a></li>
              <li><a href="/about" className="text-xs lg:text-xs text-black hover:text-red-800">Nosotros</a></li>
              <li><a href="/contact" className="text-xs lg:text-xs text-black hover:text-red-800">Mentoria</a></li>
              <li><a href="/contact" className="text-xs lg:text-xs text-black hover:text-red-800">Precios</a></li>
              <li><a href="/contact" className="text-xs lg:text-xs text-black hover:text-red-800">Contacto</a></li>
            </ul>
          </nav>
          <hr className="border-black my-2" />
          <div className="flex items-center mr-10">
            <Link to="/login" className="text-xs bg-white text-black px-3 py-1 rounded-md mr-4 ">Iniciar sesión</Link>
            <button className=" text-xs bg-indigo-300 text-white px-4 py-2 rounded-2xl hover:bg-slate-300">Registrarse</button> 
          </div>
        </div>
      </div>
    );
  }

  export default Header
