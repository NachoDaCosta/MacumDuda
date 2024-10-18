import React from 'react';
import './App.css';
import Navbar from './Modulos/Nav/Navbar';
import Ofertas from './Modulos/Ofertas/Ofertas';
import Testigos from './Modulos/Testigos/Testigos';
import Footer from './Modulos/footer/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Ofertas/>
      <Testigos/>
      <Footer/>
    </div>
  );
}

export default App;
