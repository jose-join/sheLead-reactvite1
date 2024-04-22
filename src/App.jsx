import { useState } from 'react'
import Header from './components/homePage/Header'
import Inicio from './components/homePage/Inicio'
import ComoFunciona from './components/homePage/ComoFunciona'
import Nosotros from './components/homePage/Nosotros'
import Footer from './components/homePage/Footer'
import Contacto from './components/homePage/Contacto'
import Mentoria from './components/homePage/Mentoria'
import Precio from './components/homePage/Precio'


function App() {

  return (
    <>
      <Header />
      <section id='inicio' className="bg-gray-100">
        <Inicio />
      </section>
      <section className="my-8 px-4 lg:px-0 bg-gray-100 rounded-lg shadow-md">
        <ComoFunciona />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="mentoria">
        <Mentoria />
      </section>

      <section id="precios">
        <Precio />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

      <Footer/>

      
    </>
  )
}

export default App
