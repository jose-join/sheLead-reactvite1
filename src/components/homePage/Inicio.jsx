import React from 'react'
import imagen1 from '../../image/image1.avif'

const Inicio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center px-4 sm:px-0">
        <div className="text-center p-8">
            <h1 className="mt-8 py-8 text-3xl font-bold">¡Bienvenido!, Estás a punto de tener una experiencia única con <span className="text-rose-500 font-bold">SheLead</span></h1>
            <h2></h2>
            <p className="mt-4 py-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl">Somos una plataforma dedicada a fortalecer y 
            empoderar a mujeres mentoras y jóvenes en su camino hacia el liderazgo y el éxito. En SheLead, creemos en el poder
            de la mentoría y la comunidad para inspirar el cambio positivo. Únete a nosotros mientras juntas creamos un futuro 
            donde todas las mujeres y niñas se sientan capacitadas para alcanzar sus metas y hacer realidad sus sueños.</p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded flex items-center">
            Únete a Nosotras
            <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </button>
        </div>
        <div>
            <img className="w-full h-auto" src={imagen1} alt="Descripción de la imagen" />
        </div>
    </div>
  )
}

export default Inicio
