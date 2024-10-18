import React from "react";
import "./Nav.css";


const Navbar = () => {
  return (
    <nav>
      <ul className="nav-info">
        <li>OFERTAS</li>
        <li>MACUMBAS</li>
        <li>AMORIO</li>
      </ul>

      <img src="/Media/logo.png" alt="" className="logo" />
      <div className="info">
        <a href="https://wa.me/+59895587161?text=Hola!%20Quisiera%20saber%20más%20sobre%20las%20macumbas">
          <img src="/Media/whatsapp.png" alt="" className="wpp" />
        </a>

        <div>CONTACTO</div>
      </div>
    </nav>
  );
};

export default Navbar;
