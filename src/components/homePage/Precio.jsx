import React from 'react'

const Precio = () => {
    const planes = [
        {
          nombre: "Plan Free",
          precio: "Gratis",
          beneficios: [
            "Beneficio 1",
            "Beneficio 2",
            "Beneficio 3"
          ]
        },
        {
          nombre: "Plan Estándar",
          precio: "$9.99/mes",
          beneficios: [
            "Beneficio 1",
            "Beneficio 2",
            "Beneficio 3",
            "Beneficio 4"
          ]
        },
        {
          nombre: "Plan Pro",
          precio: "$19.99/mes",
          beneficios: [
            "Beneficio 1",
            "Beneficio 2",
            "Beneficio 3",
            "Beneficio 4",
            "Beneficio 5"
          ]
        }
      ];
    
      return (
        <section id="precios" className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Nuestros Planes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planes.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.nombre}</h3>
                    <div className="text-2xl font-bold mb-4">{plan.precio}</div>
                    <ul className="text-gray-700 mb-4">
                      {plan.beneficios.map((beneficio, index) => (
                        <li key={index}>{beneficio}</li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600">Obtener Ahora</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Precio
