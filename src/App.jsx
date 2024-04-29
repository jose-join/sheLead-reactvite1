import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Header from './components/homePage/Header';
import Inicio from './components/homePage/Inicio';
import ComoFunciona from './components/homePage/ComoFunciona';
import Nosotros from './components/homePage/Nosotros';
import Footer from './components/homePage/Footer';
import Contacto from './components/homePage/Contacto';
import Mentoria from './components/homePage/Mentoria';
import Precio from './components/homePage/Precio';
import Login from './components/appPage/Login'; // Asegúrate de importar el componente Login

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Ruta para el componente Login */}
        <Route path="/" element={<Inicio />} /> {/* Ruta de inicio */}
        <Route path="/como-funciona" element={<ComoFunciona />} /> {/* Otras rutas */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/precios" element={<Precio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
