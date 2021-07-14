import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Button from "../UI/Button";
import navLogo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }

    console.log(dropdown);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }

    console.log(dropdown);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={navLogo} className="logo" alt="nav Logo"></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/campo-escuela"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Campo Escuela <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/conocenos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Conocenos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/talleres-y-proyectos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Talleres y Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/colabora"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Colaborá
            </Link>
          </li>
        </ul>
        <Button className="nav-btn" />
      </nav>
    </>
  );
}

export default Navbar;
