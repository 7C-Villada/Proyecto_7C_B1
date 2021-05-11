import React from "react";
import "./Navbar.css";
import navLogo from "./Logo.png";
import dropdownArrow from "./vectorpaint.svg";

const Navbar = () => {
  return (
    <div className="navb">
      <img src={navLogo} className="logo" alt="nav Logo"></img>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="7" className="dropdown-a">
                Conocenos
                <img
                  src={dropdownArrow}
                  className="dropdown-arrow"
                  alt="arrow"
                ></img>
              </a>
              <div className="dropdown__links">
                <a href="/">Quienes Somos</a>
                <a href="/">Que hacemos?</a>
                <a href="/">Como lo hacemos?</a>
              </div>
            </div>
          </li>
          <li>
            <a href="/">Talleres y Proyectos</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="7" className="dropdown-a">
                Campo Escuela
                <img
                  src={dropdownArrow}
                  className="dropdown-arrow"
                  alt="arrow"
                ></img>
              </a>
              <div className="dropdown__links">
                <a href="/">Reserva</a>
                <a href="/">Campamentos</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <button className="navButton">Colaborá</button>
    </div>
  );
};

export default Navbar;
