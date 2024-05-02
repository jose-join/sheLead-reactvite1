import React from 'react'
import imgen1 from '../../image/image-signup.png'
import imgen2 from '../../image/image2.png'
import imgen3 from '../../image/image3.png'
import imgen4 from '../../image/image4.png'
import imgen5 from '../../image/image5.jpg'
import imgen6 from '../../image/image6.png'

const ComoFunciona = () => {
    return (
        <>
            <div id='como-funciona' className="w-full flex justify-around">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4 pt-10 pb-10 pr-8">Cómo funciona <span className='text-red-400'>SheLead</span></h2>
            </div>


            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="bg-white rounded-lg p-4">
                    <img src={imgen1} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">01.</span><br />
                        <span className="font-bold uppercase">Crear un perfil</span>
                    </h2>
                    <p className="text-gray-700">Regístrate en SheLead y crea tu perfil personalizado.
                        Completa tu información, incluyendo tus intereses, habilidades y objetivos.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                    <img src={imgen2} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">02.</span><br />
                        <span className="font-bold uppercase">Conectar con mentoras</span>
                    </h2>
                    <p className="text-gray-700">Encuentra mentoras que compartan tus intereses y objetivos.
                        Conéctate con ellas para recibir orientación, consejos y apoyo en tu camino hacia el liderazgo
                        y el éxito.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                    <img src={imgen3} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">03.</span><br />
                        <span className="font-bold uppercase">Acceder a recursos</span>
                    </h2>
                    <p className="text-gray-700">Explora una amplia variedad de recursos educativos,
                        artículos, videos y herramientas diseñadas para ayudarte a desarrollar tus habilidades
                        y alcanzar tus metas.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                    <img src={imgen4} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">04.</span><br />
                        <span className="font-bold uppercase">Participar en comunidades</span>
                    </h2>
                    <p className="text-gray-700">Únete a comunidades de mujeres líderes y profesionales
                        en tu área de interés. Comparte experiencias, ideas y oportunidades de networking.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                    <img src={imgen5} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">05.</span><br />
                        <span className="font-bold uppercase">Explorar oportunidades</span>
                    </h2>
                    <p className="text-gray-700">Descubre oportunidades de desarrollo profesional,
                        pasantías, empleo y colaboración. Mantente al día con las últimas tendencias y eventos en tu industria.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                    <img src={imgen6} alt="Descripción de la imagen" />
                    <h2 className="text-xl font-bold mb-2">
                        <span className="text-red-500 font-bold italic">06.</span><br />
                        <span className="font-bold uppercase">Inspirar y ser inspirada</span>
                    </h2>
                    <p className="text-gray-700">Comparte tu historia, tus logros y tus desafíos.
                        Inspira a otras mujeres y sé inspirada por sus historias de éxito. Juntas, podemos crear un futuro más
                        inclusivo y equitativo.</p>
                </div>
            </div>
        </>
    )
}

export default ComoFunciona
